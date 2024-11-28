const mysql= require('mysql2')
const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()

const pool=mysql2.createPool({
    user:'root',
    database:'Telemedicine_login',
    password:'Konshens1',
    host:'localhost',
    port:'3306',
}).promise()
async function getpatient_id(id) {
    const[rows] =await pool.query('select* from patient_id WHERE id=?'
    )
    return(rows)
    
}

const results=await pool.query("select * from patient_id")
console.log(results)

async function addPatient(last_name, first_name) {
    const results=await pool.query(`
        INSERT INTO patient_id(last_name, first)
        VALUES(?,?)
        `,[last_name, first_name])
        return results.insertId
    
}
const result=await addPatient('test', 'test')
console.log(results)

pool.getConnection((err) =>{
    if(err){
    console.log('Db connected sucessfully')
}else{
    console.log('Error connecting to db')
    }
});

// Start your Express app
const PORT =5500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports= db;

