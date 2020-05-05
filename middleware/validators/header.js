const Response = require('../../util/response');

/** Validate Headers */
const accept = (request, response, next) => {
	const headers = request.headers;

	/** Check Header */
	if (!headers) {
		return Response.invalidHeader(response, 'Header Missing');
	}

	/** Accept Header */
	if (headers['content-type'] != 'application/json') {
		return Response.invalidHeader(
			response,
			'Only Accept Application/json in Header'
		);
	}

	/** Define Host From Where Data request is coming */
	if (headers.host != process.env.HOST) {
		return Response.invalidHeader(
			response,
			`${process.env.host} are allowed to ping this api`
		);
	}

	next();
};

/** Validate Authorization Header */
const authorization = (request) => {
	const headers = request.headers;

	if (!headers.authorization) {
		throw new Error('Authorization Header is Missing');
	}

	return headers.authorization;
};

module.exports = { accept: accept, auth: authorization };
