/**
 * Response structure for 200 Success
 * @param object response | from request
 * @param object data | the data to be returned
 */
exports.success = (response, data) => {
	response.status(200).json({
		error: false,
		message: 'OK',
		data: data,
	});
};

/**
 * Response structure for 201 Created
 * @param object response | from request
 * @param object insertedId | id of inserted data
 */
exports.created = (response, insertedId) => {
	response.status(201).json({
		error: false,
		message: 'Created',
		data: insertedId,
	});
};

/**
 * Response structure for 400 Invalid Request
 * @param object response | from request
 * @param object error | the error object
 * @param string message | the error message
 */
exports.invalidRequest = (response, error, message) => {
	response.status(400).json({
		error: true,
		errorDetails: error,
		message: message,
	});
};

/**
 * Response structure for 401 not Found
 * @param object response | from request
 * @param object error | the error object
 * @param string message | the error message
 */
exports.notFound = (response, error, message) => {
	response.status(401).json({
		error: true,
		errorDetails: error,
		message: message,
	});
};

/**
 * Response structure for 400 Invalid Input Data in Body
 * @param object response | from request
 * @param object error | the error object
 * @param string message | the error message
 */
exports.invalidInput = (response, error, message) => {
	let errorMessage = '';
	let count = true;
	for (const [key, value] of Object.entries(error)) {
		if (count) {
			errorMessage += `${value.message}`;
			count = false;
		} else {
			errorMessage += `\n${value.message}`;
		}
	}

	response.status(400).json({
		error: true,
		errorDetails: error,
		message: errorMessage || message,
	});
};

/**
 * Response structure for 500 Internal Server Error
 * @param object response | from request
 * @param object error | the error object
 * @param string message | the error message
 */
exports.error = (response, error, message) => {
	response.status(500).json({
		error: true,
		errorDetails: error,
		message: message,
	});
};

/**
 * Response structure for 500 Internal Server Error
 * @param object response | from request
 * @param object error | the error object
 * @param string message | the error message
 */
exports.validation = (response, error) => {
	response.status(412).send({
		error: true,
		errorDetails: error,
		message: 'Validation failed',
	});
};

/**
 * Response structure for 400 Header Missing
 * @param object response | from request
 * @param object error | the error object
 * @param string message | the error message
 */
exports.invalidHeader = (response, error) => {
	response.status(400).json({
		error: true,
		errorDetails: error,
		message: 'Header Missing',
	});
};
