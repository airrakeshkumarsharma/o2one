// Validator

const Validator = require('validatorjs');

const validator = async (body, rules, customMessages) => {
	const validation = new Validator(body, rules, customMessages);

	return [validation.passes(), validation.errors.errors];
};

module.exports = validator;
