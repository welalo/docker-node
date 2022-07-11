const { validationResult } = require('express-validator');
const { httpErrorHandler } = require("../handlers/httpError.handler");

const validatorMiddelware = (req,res,next) => {
    const errors = validationResult(req);
        if (errors.isEmpty())
            next();
        else
            httpErrorHandler(res, 400, errors.array())
}


module.exports = {
    validatorMiddelware
}