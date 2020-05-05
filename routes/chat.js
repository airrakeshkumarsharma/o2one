/** Socket Routes Declaration */
const { auth } = require('./../middleware/index');
const { chatCtrl } = require('./../controllers/index');

const socket = (socket) => {
	socket.on('user.send', async (data) => {
		try {
			const decoded = await auth(token);

			data = await chatCtrl(decoded, data);
			return socket.emit('user.received', data);
		} catch (error) {
			return socket.emit('user.received', {
				error: true,
				message: error.message,
			});
		}
	});
};

module.exports = {
	chat: socket,
};
