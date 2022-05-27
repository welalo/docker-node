const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    edad: Number
});


module.exports = mongoose.model('employees', schema)
