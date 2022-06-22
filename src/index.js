require('dotenv').config()

const express = require('express');
const {connectMongo} = require('./services/dbConnnector')
const routes = require('./routes')
const {handleError} = require('./handles/handleError')

const app =  express();
app.use(express.json());

connectMongo();


const PORT = process.env.PORT || 3000;

app.use('/api',routes)




//manejadores errores

app.use((err, req, res, next) => {
    handleError(res, 500, err.message)
})

app.use((req,res,next) => {
    handleError(res, 404)
})
 


const server = app.listen(PORT, error => {
    
    if(error)
        throw error;

    console.log(`App running in port ${PORT}!!!`)

});

module.exports = server;