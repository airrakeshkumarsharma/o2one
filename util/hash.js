const bcrypt = require('bcrypt');

/**
 * Create bcrypt hash a String
 * @param object params | Password parameters
 * @return [object] created hash
 * @error throw invalid request error
 */
const generate = async (password) => {
	const saltRounds = process.env.SALT_SOUNDS;
	let hashed;

	try {
		hashed = await bcrypt.hash(password, parseInt(saltRounds));
	} catch (error) {
		throw new Error('Hashing Error');
	}

	return hashed;
};

/**
 * Validate hash a String
 * @param object params | Password parameters
 * @return [object] created hash
 * @error throw invalid request error
 */
const validate = async (password, hash) => {
	let isMatched;

	try {
		isMatched = await bcrypt.compare(password, hash);
	} catch (error) {
		throw new Error(error.message);
	}

	return isMatched;
};

module.exports = {
	generateHash: generate,
	validateHash: validate,
};
