const {getReasonPhrase} = require('http-status-codes')

/**
 * 
 * @param {*} res 
 * @param {*} code 
 * @param {*} message 
 * @returns 
 */

const httpErrorHandler = (res, code=500, message='') => {
    return res.status(code).json({
      status: code,
      error: getReasonPhrase(code),
      message
    });
};

module.exports = {
  httpErrorHandler
}