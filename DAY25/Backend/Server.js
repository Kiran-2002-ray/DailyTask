const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors')
const jwt = require('jsonwebtoken');


const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kinu@9182', 
  database: 'Student', 
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
});

app.get('/getdata/:id', async (req, res) => {
    const userId = req.params.id; // Extract ID from the URL
  
    const sql = 'SELECT * FROM users WHERE id = ?';
    
    db.query(sql, [userId], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Database error.');
      }
      
      if (results.length === 0) {
        return res.status(404).send('User not found.');
      }
  
      // Return user details
      res.status(200).json(results[0]);
    });
  });
  
// Routes
// Signup Route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert into database
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, hashedPassword], (err, result) => {
    if (err) {
      // Return a JSON error message
      return res.status(500).json({ message: 'Database error.' });
    }
    // Send a success message as JSON
    res.status(201).json({ message: 'User registered successfully.' });
  });
});

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).send('Email and password are required.');
  }

  // Check the user in the database
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).send('Database error.');

    if (results.length === 0) {
      return res.status(404).send('User not found.');
    }

    const user = results[0];

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials.');
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
