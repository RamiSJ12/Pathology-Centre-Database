// Required dependencies
const express = require('express');
const mysql = require('mysql');

// Initialize Express application
const app = express();
const port = 3000;

// MySQL Database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'pathology_center_db'
});

// Connect to MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Endpoint to fetch all patients
app.get('/api/patients', (req, res) => {
    const sql = 'SELECT * FROM patients';

    connection.query(sql, (error, results, fields) => {
        if (error) {
            console.error('Error fetching patients:', error);
            res.status(500).json({ error: 'Failed to fetch patients' });
        } else {
            res.json(results);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
