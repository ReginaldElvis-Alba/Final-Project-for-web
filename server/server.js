const express = require('express');
const bodyParser = require('body-parser');  // To parse incoming request bodies
const app = express();

// Middleware to parse JSON bodies from POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
//const authRoutes = require('./routes/auth');
const patientRoutes = require('./routes/patients');
//const doctorRoutes = require('./routes/doctors');
//const appointmentRoutes = require('./routes/appointments');

// Use routes for different paths
//app.use('/auth', authRoutes);
app.use('/patients', patientRoutes);
//app.use('/doctors', doctorRoutes);
//app.use('/appointments', appointmentRoutes);

// Set a port for the server to listen on
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
