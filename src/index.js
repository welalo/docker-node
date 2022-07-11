require('dotenv').config()

const express = require('express');
const {connectMongo} = require('./services/dbConnnector')
const routes = require('./routes')
const {httpErrorHandler} = require('./handlers/httpError.handler')
const PORT = process.env.PORT || 3000;

const app =  express();
app.use(express.json());

connectMongo();


//Routes
app.use('/api',routes)

//Error handlers

app.use((err, req, res, next) => {
    httpErrorHandler(res, 500, err.message)
})

app.use((req,res,next) => {
    httpErrorHandler(res, 404, 'SERVICE_NOT_FOUND')
})
 

//Start server

const server = app.listen(PORT, error => {
    
    if(error)
        throw error;

    console.log(`App running in port ${PORT}!!!`)

});

module.exports = server;