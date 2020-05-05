/**
 * User Controller
 */
const { beforeCreateUser } = require('./../app/index');
const { userRepo } = require('./../repository/index');
const { validateHash } = require('./../util/hash');
const { tokenGenerator } = require('./../util/token-generator');
const Response = require('./../util/response');

const secrete = process.env.USER_SECRETE_KEY;
const expireIn = process.env.USER_SECRETE_EXPIRE_IN;

/** Create User */
const create = async (request, response) => {
	let result;
	const body = request.body;

	try {
		const processedBody = await beforeCreateUser.process(body);

		result = await userRepo.createOne(processedBody);
	} catch (error) {
		return Response.error(
			response,
			error.message,
			'Institution Creating Error'
		);
	}

	return Response.success(response, result);
};

/** Login User */
const login = async (request, response) => {
	let result;
	const body = request.body;

	try {
		/** Prepare Request */
		const where = { email: body.email };
		const projection = { email: 1, password: 1, firstName: 1 };

		/** Get data from database */
		const dbResult = await userRepo.findOne(where, projection);

		/** Check Wether Email Present Or not */
		if (!dbResult) throw new Error('Email or Password not Matched');

		/** Validate Password */
		const validatePassword = await validateHash(
			body.password,
			dbResult.password
		);
		if (!validatePassword)
			throw new Error('Email or password is incorrect');

		/** Create Token */
		const encapsulateData = { id: dbResult._id };
		const token = await tokenGenerator(encapsulateData, secrete, expireIn);

		/** Delete  */
		delete dbResult.password;
		delete dbResult._id;

		result = { authKey: token, user: dbResult };
	} catch (error) {
		return Response.notFound(
			response,
			error.message,
			'Invalid Credentials'
		);
	}

	return Response.success(response, result);
};

module.exports = {
	create: create,
	login: login,
};
