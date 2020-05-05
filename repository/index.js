/** Exports All the Repository */
const user = require('./user');
const chat = require('./chat');

module.exports = {
	userRepo: user,
	chatRepo: chat,
};
