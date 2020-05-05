/**
 * Register All the Route in order to use in app.js
 */
const user = require('./user');
const chat = require('./chat');

/** Export All Routes */
module.exports = {
	userRoute: user,
	chatRoute: chat,
};
