const {Router} = require('express');
const {getUser, createUser} = require('../controllers/user.controller')
const {validatorCreateUser} =  require('./../validators/user.validadors')

const user = Router();

user.get('/', getUser)
user.post('/', validatorCreateUser, createUser)

module.exports = user;
