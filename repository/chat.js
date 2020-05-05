/** User database Operations */
const { chatModel } = require('./../models/index');

const findOne = async (where, projection) => {
	return await chatModel.findOne(where, projection);
};

const findMany = async (pipeline) => {
	await chatModel.aggregate(pipeline);
};

const createOne = async (payload) => {
	await chatModel.create(payload);
};

const updateOne = async (where, payload) => {
	await chatModel.updateOne(where, payload);
};

module.exports = {
	findOne: findOne,
	findMany: findMany,
	createOne: createOne,
	updateOne: updateOne,
};
