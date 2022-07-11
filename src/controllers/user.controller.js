const User = require('../models/user.model')
const {httpErrorHandler} = require('../handlers/httpError.handler')
const {matchedData} = require('express-validator')

async function getUsers(req,res){
    try {
        const data =  await User.find({});
        res.status(200).json(data)
    } catch (error) {
        handlerError(res, 500, error.message);
    }
}


async function getDetailUser(req,res){

    try {

        const {id} =  matchedData(req);
        const data =  await User.findById(id);

        if(!data)
            return httpErrorHandler(res, 404, 'Usuario no encontrado');
        res.status(200).json(data)

    } catch (error) {
        httpErrorHandler(res, 500, error.message);
    }
}

async function createUser(req,res){
    try {

        const {body} =  matchedData(req);
        const data =  await User.create(body);

        res.status(200).json(data);

    } catch (error) {
        httpErrorHandler(res, 400, error.message);
    }
}

async function deleteUser(req,res){

    try {

        const {id} =  matchedData(req);
        const data =  await User.findByIdAndDelete(id);
        res.status(200).json(data)

    } catch (error) {
        httpErrorHandler(res, 500, error.message);
    }
}
async function updateUser(req,res){

    const {id} =  matchedData(req);
    try {
        const data =  await User.findByIdAndUpdate(id, req.body, {returnDocument: 'after'});
        res.status(200).json(data)
    } catch (error) {
        httpErrorHandler(res, 500, error.message);
    }
}

module.exports = {
    getUsers,
    createUser,
    getDetailUser,
    deleteUser,
    updateUser
}