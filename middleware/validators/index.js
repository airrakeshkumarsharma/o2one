/** Export All the Validators */
const user = require('./user');
const header = require('./header');

module.exports = {
	userValidator: user,
	headerValidator: header,
};
