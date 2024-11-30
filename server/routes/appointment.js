const express = require('express');
const router = express.Router();
const { 
    createAppointment, 
    getAllAppointments, 
    getAppointmentById, 
    updateAppointment, 
    deleteAppointment 
} = require('../controllers/appointmentController');

// Create an Appointment
router.post('/create', createAppointment);

// Get All Appointments
router.get('/', getAllAppointments);

// Get an Appointment by ID
router.get('/:id', getAppointmentById);

// Update an Appointment
router.put('/:id', updateAppointment);

// Delete an Appointment
router.delete('/:id', deleteAppointment);

module.exports = router;
