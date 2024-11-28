const express=require('express')
const app=express()
import { getpatient_id } from './db.js';

//routes
app.get('/patient_id', async(req,res) =>{
    res.send('The patient is recovering')
    const patient_id=await getpatient_id()
    res.send('')
})

// Start your Express app
const PORT =5500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

