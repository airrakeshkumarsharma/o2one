/** Exports All Controller */

const user = require('./user');
const chat = require('./chat');

module.exports = {
	userCtrl: user,
	chatCtrl: chat,
};
