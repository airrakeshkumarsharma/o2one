const { generateHash } = require('../util/hash');

/** Before create Logic
 * @param {object} body | Data Which is coming
 * @return {ExceptionInformation} When there is exception
 * @return {object} result | attached and calculated new Logic
 */
const process = async (body) => {
	let result;

	try {
		body.password = await generateHash(body.password);

		result = body;
	} catch (error) {
		throw new Error('Create: Processing Error');
	}

	return result;
};

// Export
module.exports = {
	process: process,
};
