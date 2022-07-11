const {check, matchedData} = require('express-validator');
const { handlerValidator } = require("./../handlers/handlerValidator");

//const validator = handleValidator

const validatorCreateUser = [
        check('name').not().isEmpty(),
        check("email").not().isEmpty().isEmail(),
        check("password").not().isEmpty(),
        handlerValidator
]

const validatorIdUser = [
    check('id').not().isEmpty().isMongoId(),
    handlerValidator
]


module.exports = {
    validatorCreateUser,
    validatorIdUser
}