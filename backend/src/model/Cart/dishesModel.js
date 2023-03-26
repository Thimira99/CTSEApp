const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
		trim: true,
	},
    categoryid: {
		type: String,
		required: true,
		trim: true,
	},
    image: {
		type: String,
		required: true,
		trim: true,
	},
    name: {
		type: String,
		required: true,
		trim: true,
	},
    rating: {
		type: String,
		required: true,
		trim: true,
	},
	address: {
		type: String,
		required: true,
		trim: true,
	},
	short_description: {
		type: String,
		required: true,
	},
    genre: {
		type: String,
		required: true,
	}
});

const s_dishesTable = mongoose.model('s_dishesTable', UserSchema);
module.exports = s_dishesTable;
