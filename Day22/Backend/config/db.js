const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', 
  password: 'Kin@9182', 
  database: 'dumy',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Function to test the connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Successfully connected to the database');
    connection.release(); // Release the connection
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

// Wrapper function for executing queries
async function execute(query, params = []) {
  try {
    const [rows] = await pool.execute(query, params);
    return rows; 
  } catch (error) {
    console.error('Error executing query:', error.message);
    throw error;
  }
}


async function testExecute() {
  try {
    const query = 'SELECT * FROM users'; 
const results = await execute(query);
console.log('Query Results:', results); 

  } catch (error) {
    console.error('Test Execute Error:', error.message);
  }
}

// Test the connection and the execute function
testConnection();
testExecute();

module.exports = { execute };
