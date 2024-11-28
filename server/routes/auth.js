// In routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../models/db');  // Your database connection
const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Query the database for the user
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Compare the entered password with the hashed password stored in the database
        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return res.status(500).json({ success: false, message: 'Server error' });
            }

            if (isMatch) {
                // Password is correct, log the user in (e.g., by setting a session or JWT)
                res.status(200).json({ success: true, message: 'Login successful' });
            } else {
                res.status(400).json({ success: false, message: 'Incorrect password' });
            }
        });
    });
});

module.exports = router;

