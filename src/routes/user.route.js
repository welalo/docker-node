const {Router} = require('express');
const {getUsers, getDetailUser, createUser, deleteUser, updateUser} = require('../controllers/user.controller')
const {validatorCreateUser, validatorIdUser} =  require('./../validators/user.validator')

const user = Router();

user.get('/', getUsers)
user.get('/:id', validatorIdUser, getDetailUser)
user.post('/', validatorCreateUser, createUser)
user.delete('/:id', validatorIdUser, deleteUser)
user.put('/:id', validatorIdUser, updateUser)




module.exports = user;
