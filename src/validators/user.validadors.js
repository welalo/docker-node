const {check, validationResult} = require('express-validator');
const {handleError} = require('./../handles/handleError');


const validatorUser = [
        check('name').not().isEmpty(),
        check("email").not().isEmpty().isEmail(),
        check("password").not().isEmpty().isLength({min: 3, max: 20}),
        (req, res, next) => {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return handleError(res, 400, errors.array())
          }
          next();
        }
]

module.exports = {
    validatorUser
}