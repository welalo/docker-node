const {check, matchedData} = require('express-validator');
const { handleValidator } = require("./../handles/handleValidator");

//const validator = handleValidator

const validatorCreateUser = [
        check('name').not().isEmpty(),
        check("email").not().isEmpty().isEmail(),
        check("password").not().isEmpty(),
        handleValidator
]

const validatorIdUser = [
    check('id').not().isEmpty().isMongoId(),
    handleValidator
]


module.exports = {
    validatorCreateUser,
    validatorIdUser
}