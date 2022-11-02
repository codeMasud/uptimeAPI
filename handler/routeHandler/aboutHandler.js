const about = {};
about.aboutHandler = (requstProperties, callback) => {
    callback(200, {
        message: 'About Page',
    });
};
module.exports = about;
