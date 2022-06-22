const {Router} = require('express');
const {getUsers, getDetailUser, createUser, deleteUser, updateUser} = require('../controllers/user.controller')
const {validatorUser} =  require('./../validators/user.validadors')

const user = Router();

user.get('/', getUsers)
user.get('/:id', getDetailUser)
user.delete('/:id', deleteUser)
user.put('/:id', updateUser)

user.post('/', validatorUser, createUser)


module.exports = user;
