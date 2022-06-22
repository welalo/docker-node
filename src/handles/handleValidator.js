const { validationResult } = require('express-validator');
const { handleError } = require("./handleError");

const handleValidator = (req,res,next) => {
    const errors = validationResult(req);

        if (errors.isEmpty())
            next();
        else
            handleError(res, 400, errors.array())
}


module.exports = {
    handleValidator
}