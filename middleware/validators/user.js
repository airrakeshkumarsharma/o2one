const validator = require('./../../util/validate');
const Response = require('./../../util/response');

/** Validate Create Body */
const createUser = async (request, response, next) => {
	const body = request.body;

	const validationRule = {
		firstName: 'required|string',
		lastName: 'required|string',
		email: 'required|email',
		mobile: 'required|string',
		password: 'required|string|min:8',
	};

	const [status, error] = await validator(body, validationRule);
	if (!status) return Response.validation(response, error);

	next();
};

const login = async (request, response, next) => {
	const body = request.body;

	const validationRule = {
		email: 'required|email',
		password: 'required|string',
	};

	const [status, error] = await validator(body, validationRule);
	if (!status) {
		const errorDetail = 'Email or Password not Matched';

		return Response.notFound(response, errorDetail, 'Invalid Credentials');
	}

	next();
};

module.exports = {
	createUser: createUser,
	login: login,
};
