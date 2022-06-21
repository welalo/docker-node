const {check, validationResult} = require('express-validator');

const validatorCreateUser = (req,res,next) => {

    [
    check("name").not().isEmpty(),
    check("email").not().isEmpty().isEmail(),
    check("password").not().isEmpty().isLength({min: 3, max: 20})    
    ], (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
        console.log(errors)
          return res.status(400).json({Errores: errors.array()})
        }
        else 
            next();
    }

}

module.exports = {
    validatorCreateUser
}