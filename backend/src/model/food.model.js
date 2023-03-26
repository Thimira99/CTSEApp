const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	logoUrl: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
	},
	quantity: {
		type: String,
		required: true,
	},
});

const Food = mongoose.model('food', FoodSchema);
module.exports = Food;
