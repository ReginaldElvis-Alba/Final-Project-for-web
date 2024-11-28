const db = require('../models/db');

// Add a Patient
const addPatient = (req, res) => {
    const { name, age, contact, service } = req.body;
    const query = 'INSERT INTO patients (name, age, contact, service) VALUES (?, ?, ?, ?)';
    db.query(query, [name, age, contact, service], (err) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(201).json({ message: 'Patient added successfully' });
    });
};

// Get All Patients
const getAllPatients = (req, res) => {
    const query = 'SELECT * FROM patients';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json(results);
    });
};

// Get Patient by ID
const getPatientById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM patients WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (results.length > 0) {
            res.status(200).json(results[0]);
        } else {
            res.status(404).json({ message: 'Patient not found' });
        }
    });
};

// Update a Patient
const updatePatient = (req, res) => {
    const { id } = req.params;
    const { name, age, contact, service } = req.body;
    const query = 'UPDATE patients SET name = ?, age = ?, contact = ?, service = ? WHERE id = ?';
    db.query(query, [name, age, contact, service, id], (err) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json({ message: 'Patient updated successfully' });
    });
};

// Delete a Patient
const deletePatient = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM patients WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json({ message: 'Patient deleted successfully' });
    });
};

module.exports = { addPatient, getAllPatients, getPatientById, updatePatient, deletePatient };
