const express = require('express');
const router = express.Router();
const { addDoctor, getAllDoctors, getDoctorById, updateDoctor, deleteDoctor } = require('../controllers/doctorController');

// Add a Doctor
router.post('/add', addDoctor);

// Get All Doctors
router.get('/', getAllDoctors);

// Get a Doctor by ID
router.get('/:id', getDoctorById);

// Update a Doctor
router.put('/:id', updateDoctor);

// Delete a Doctor
router.delete('/:id', deleteDoctor);

module.exports = router;
