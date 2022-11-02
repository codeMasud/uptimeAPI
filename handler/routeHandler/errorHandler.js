const error = {};
error.errorHandler = (requstProperties, callback) => {
    callback(200, {
        message: 'error Page',
    });
};
module.exports = error;
