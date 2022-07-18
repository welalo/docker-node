const {check} = require('express-validator');
const { validator } = require("../middlewares/validator.middleware");


const validatorCreateUser = [
        check('name').not().isEmpty(),
        check("email").not().isEmpty().isEmail(),
        check("password").not().isEmpty(),
        validator
]

const validatorIdUser = [
    check('id').not().isEmpty().isMongoId(),
    validator
]


module.exports = {
    validatorCreateUser,
    validatorIdUser
}