const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var userSchema = new Schema(
	{
		firstName: {
			type: String,
			trim: true,
			required: [true, 'First Name is Required'],
		},
		lastName: {
			type: String,
			trim: true,
			required: [true, 'Last Name is Required'],
		},
		email: {
			type: String,
			trim: true,
			required: [true, 'Email is Required'],
			unique: [true, 'Email Number already Exists'],
		},
		mobile: {
			type: String,
			trim: true,
			required: [true, 'Mobile is Required'],
		},
		password: {
			type: String,
			required: [true, 'Password is Required'],
		},
	},
	{ timestamps: true },
	{ strict: true }
);

userSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model('users', userSchema);
