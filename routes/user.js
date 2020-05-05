/** User Routes */

const express = require('express');
const router = express.Router();

const {
	headerValidator,
	userValidator,
	auth,
} = require('./../middleware/index');

const { userCtrl } = require('./../controllers/index');

router.post(
	'/create',
	headerValidator.accept,
	userValidator.createUser,
	userCtrl.create
);

router.post(
	'/login',
	headerValidator.accept,
	userValidator.login,
	userCtrl.login
);

module.exports = router;
