const express = require('express');
require('dotenv').config()
const {connectMongo} = require('./dbConnnector')


connectMongo();

const app =  express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.status(200).json({Message: 'Hello world'})
})


app.listen(PORT, error => {
    
    if(error)
        throw error;

    console.log(`App running in port ${PORT}!!!`)

});