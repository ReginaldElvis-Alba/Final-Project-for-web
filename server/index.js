const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const doctorRoutes = require('./routes/doctors');
const patientRoutes = require('./routes/patients');
const appointmentRoutes = require('./routes/appointments');


const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/doctors', doctorRoutes);
app.use('/patients', patientRoutes);
app.use('/appointments', appointmentRoutes);


app.listen(5500, () => {
    console.log('Server running on http://localhost:5500');
});
