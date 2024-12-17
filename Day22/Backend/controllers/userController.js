const db = require('../config/db');
const bcrypt = require('bcrypt'); 

// Signup Controller
exports.signupUser = async (req, res) => {
    const { name, email, password, phone, address } = req.body;
  
    if (!name || !email || !password || !phone || !address) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const query = 'INSERT INTO users (name, email, password, phone, address) VALUES (?, ?, ?, ?, ?)';
      const values = [name, email, hashedPassword, phone, address];
  
      const [result] = await db.query(query, values);
      console.log('Insert result:', result);  // Log the result to check insertion
      res.status(201).json({ message: 'User registered successfully!', userId: result.insertId });
    } catch (err) {
      console.error('Error during signup:', err);  // Log the error details for debugging
      res.status(500).json({ error: 'Database error occurred!', details: err.message });
    }
  };
  

// Login Controller
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = 'SELECT * FROM `users` WHERE email = ?';
    const [rows] = await db.query(query, [email]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found!' });
    }

    const user = rows[0];

    // Compare provided password with hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials!' });
    }

    res.status(200).json({ message: 'Login successful!', user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error occurred!' });
  }
};
