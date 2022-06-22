const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, unique: true, required:true, lowercase: true},
        password: {type: String, minlength: 3, maxlength:20, required: true}
    },
    {
        timestamps : true,
        versionKey: false
    }
);

module.exports = mongoose.model('User', schema)
