/** Exports all middleware File */
const headerValidator = require('./validators/header');
const userValidator = require('./validators/user');
const authenticate = require('./authentication');

module.exports = {
	headerValidator: headerValidator,
	userValidator: userValidator,
	auth: authenticate,
};
