const express = require('express');
require('dotenv').config()
const {connectMongo} = require('./dbConnnector')
const Employees = require('./models/employeesModel')


connectMongo();

const app =  express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req,res) => {
    const data = await Employees.find();
    res.json(data)
})


app.listen(PORT, error => {
    
    if(error)
        throw error;

    console.log(`App running in port ${PORT}!!!`)

});