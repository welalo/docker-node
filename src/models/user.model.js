const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String
    },
    {
        timestamps : true,
        versionKey: false
    }
);


module.exports = mongoose.model('User', schema)
