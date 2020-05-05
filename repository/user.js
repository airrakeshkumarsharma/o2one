/** User database Operations */
const { userModel } = require('./../models/index');

const findOne = async (where, projection) => {
	return await userModel.findOne(where, projection);
};

const findMany = async (pipeline) => {
	await userModel.aggregate(pipeline);
};

const createOne = async (payload) => {
	const data = await userModel.create(payload);

	return data;
};

const updateOne = async (where, payload) => {
	await userModel.updateOne(where, payload);
};

module.exports = {
	findOne: findOne,
	findMany: findMany,
	createOne: createOne,
	updateOne: updateOne,
};
