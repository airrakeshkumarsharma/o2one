const jwt = require('jsonwebtoken');

const secrete = process.env.USER_SECRETE_KEY;

/** Decrypt Data
 * @header {request} | Which is sent by the client
 * @returns {Object} decodedData | Decoded Data
 */

const authenticate = async (authToken) => {
	let decodedData;

	try {
		decodedData = await jwt.verify(authToken, secrete);
	} catch (error) {
		throw new Error('Authentication Failed');
	}

	return decodedData;
};

module.exports = { authenticate: authenticate };
