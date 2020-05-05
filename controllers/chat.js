const { chatRepo } = require('./../repository/index');
const { chatModel } = require('./../models/index');

const chat = async (decoded, data) => {
	let result;

	const id = decoded.id;
	const chatData = {
		senderId: id,
		message: data.message,
	};

	try {
		const dbResult = await chatRepo.createOne(chatData);

		result = await chatModel
			.find({ _id: dbResult._id })
			.populate('senderId');
	} catch (error) {
		throw new Error(error.message);
	}

	return result;
};

module.exports = {
	chat: chat,
};
