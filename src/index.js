const express = require('express');
require('dotenv').config()
const {connectMongo} = require('./services/dbConnnector')
const routes = require('./routes')

const app =  express();
app.use(express.json());

connectMongo();


const PORT = process.env.PORT || 3000;

app.use('/api',routes)


app.use((err, req, res, next) => {
    res.status(500).json({Error: err.message})
})

app.listen(PORT, error => {
    
    if(error)
        throw error;

    console.log(`App running in port ${PORT}!!!`)

});