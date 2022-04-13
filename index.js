const express = require('express');

const app =  express();


app.get('/', (req,res) => {
    res.status(200).json({Message: 'Hello world'})
})


app.listen(process.env.PORT || 3000, error => {
    
    if(error)
        throw error;

    console.log(`App running!!!`)

});