const {Router} = require('express');
const {getUser, createUser} = require('./../controllers/user.contoller')

const user = Router();

user.get('/', getUser)
user.post('/', createUser)

module.exports = user;
