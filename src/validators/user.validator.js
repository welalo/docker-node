const {check} = require('express-validator');
const { validatorMiddelware } = require("../middlewares/validator.middleware");

//const validator = handleValidator

const validatorCreateUser = [
        check('name').not().isEmpty(),
        check("email").not().isEmpty().isEmail(),
        check("password").not().isEmpty(),
        validatorMiddelware
]

const validatorIdUser = [
    check('id').not().isEmpty().isMongoId(),
    validatorMiddelware
]


module.exports = {
    validatorCreateUser,
    validatorIdUser
}