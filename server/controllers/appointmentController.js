const db = require('../models/db');

// Create a new appointment
const createAppointment = (req, res) => {
    const { patient_id, doctor_id, appointment_date, status, notes } = req.body;
    const query = `INSERT INTO appointments (patient_id, doctor_id, appointment_date, status, notes) VALUES (?, ?, ?, ?, ?)`;

    db.query(query, [patient_id, doctor_id, appointment_date, status, notes], (err) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(201).json({ message: 'Appointment created successfully' });
    });
};

// Get all appointments
const getAllAppointments = (req, res) => {
    const query = 'SELECT * FROM appointments';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json(results);
    });
};

// Get an appointment by ID
const getAppointmentById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM appointments WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        if (results.length === 0) return res.status(404).json({ error: 'Appointment not found' });
        res.status(200).json(results[0]);
    });
};

// Update an appointment
const updateAppointment = (req, res) => {
    const { id } = req.params;
    const { appointment_date, status, notes } = req.body;
    const query = `UPDATE appointments SET appointment_date = ?, status = ?, notes = ? WHERE id = ?`;

    db.query(query, [appointment_date, status, notes, id], (err) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json({ message: 'Appointment updated successfully' });
    });
};

// Delete an appointment
const deleteAppointment = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM appointments WHERE id = ?';

    db.query(query, [id], (err) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(200).json({ message: 'Appointment deleted successfully' });
    });
};

module.exports = {
    createAppointment,
    getAllAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment,
};
