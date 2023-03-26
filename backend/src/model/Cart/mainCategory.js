const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
		trim: true,
	},
	CategoryName: {
		type: String,
		required: true,
		trim: true,
	},
	Description: {
		type: String,
		required: true,
	}
});

const s_mainCategory = mongoose.model('s_mainCategory', UserSchema);
module.exports = s_mainCategory;
