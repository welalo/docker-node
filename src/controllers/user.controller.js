const User = require('../models/user.model')
const {matchedData} = require('express-validator');

async function getUser(req,res,next){
    try {
        const data =  await User.find({});
        res.status(200).json(data)
    } catch (error) {
        next(error);
    }
}

async function createUser(req,res,next){

    console.log(req.body)
    console.log(matchedData(req));
    
    try {
        const data =  await User.create(req.body)
        res.status(200).json(data)
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getUser,
    createUser
}