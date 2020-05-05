const jwt = require('jsonwebtoken');

const secrete = process.env.STUDENT_SECRETE_KEY;

/**
 * Token Generator
 * @param {Object} data | Data Which need to need encrypt
 * @param {String} secrete |
 * @returns {token} AuthKey | Auth Key which is signed by private Key
 */
const tokenGenerator = async (data, secrete, expiresIn) => {
	let token;

	try {
		token = await jwt.sign(data, secrete, {
			expiresIn: expiresIn,
		});
	} catch (error) {
		throw new Error(error.message);
	}

	return token;
};

module.exports = { tokenGenerator: tokenGenerator };
