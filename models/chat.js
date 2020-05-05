const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var chatSchema = new Schema(
	{
		senderId: {
			type: Schema.Types.ObjectId,
			required: [true, 'Sender Id is Required'],
			ref: 'users',
		},
		firstName: {
			type: String,
			trim: true,
		},
	},
	{ timestamps: true },
	{ strict: true }
);

module.exports = mongoose.model('chat', chatSchema);
