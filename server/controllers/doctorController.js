const db = require('../models/db');

// Add a Doctor
const addDoctor = (req, res) => {
    const { name, specialization, contact } = req.body;
    const query = 'INSERT INTO doctors (name, specialization, contact) VALUES (?, ?, ?)';
    db.query(query, [name, specialization, contact], (err) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(201).json({ message: 'Doctor added successfully' });
    });
};

// Get All Doctors
const getAllDoctors = (req, res) => {
    const query = 'SELECT * FROM doctors';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json(results);
    });
};

// Get Doctor by ID
const getDoctorById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM doctors WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (results.length > 0) {
            res.status(200).json(results[0]);
        } else {
            res.status(404).json({ message: 'Doctor not found' });
        }
    });
};

// Update a Doctor
const updateDoctor = (req, res) => {
    const { id } = req.params;
    const { name, specialization, contact } = req.body;
    const query = 'UPDATE doctors SET name = ?, specialization = ?, contact = ? WHERE id = ?';
    db.query(query, [name, specialization, contact, id], (err) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json({ message: 'Doctor updated successfully' });
    });
};

// Delete a Doctor
const deleteDoctor = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM doctors WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json({ message: 'Doctor deleted successfully' });
    });
};

module.exports = { addDoctor, getAllDoctors, getDoctorById, updateDoctor, deleteDoctor };
