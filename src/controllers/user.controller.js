const User = require('../models/user.model')
const {handleError} = require('./../handles/handleError')

async function getUsers(req,res){
    try {
        const data =  await User.find({});
        res.status(200).json(data)
    } catch (error) {
        handleError(res, 500, error.message);
    }
}


async function getDetailUser(req,res){

    try {
        const data =  await User.findById(req.params.id);
        if(!data)
            return handleError(res, 404, 'Usuario no encontrado');
        res.status(200).json(data)
    } catch (error) {
        handleError(res, 500, error.message);
    }
}

async function createUser(req,res){
    try {
        const data =  await User.create(req.body)
        res.status(200).json(data)
    } catch (error) {
        handleError(res, 400, error.message);
    }
}

async function deleteUser(req,res){

    try {
        const data =  await User.findByIdAndDelete(req.params.id);
        res.status(200).json(data)
    } catch (error) {
        handleError(res, 500, error.message);
    }
}
async function updateUser(req,res){

    try {
        const data =  await User.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'});
        res.status(200).json(data)
    } catch (error) {
        handleError(res, 500, error.message);
    }
}

module.exports = {
    getUsers,
    createUser,
    getDetailUser,
    deleteUser,
    updateUser
}