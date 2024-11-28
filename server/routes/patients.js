const express = require('express');
const router = express.Router();
const { addPatient, getAllPatients, getPatientById, updatePatient, deletePatient } = require('../controllers/patientController');

// Add a Patient
router.post('/add', addPatient);

// Get All Patients
router.get('/', getAllPatients);

// Get a Patient by ID
router.get('/:id', getPatientById);

// Update a Patient
router.put('/:id', updatePatient);

// Delete a Patient
router.delete('/:id', deletePatient);

module.exports = router;
