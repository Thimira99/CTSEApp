const mongoose = require('mongoose');

const FoodScheme = new mongoose.Schema({
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

const Foods = mongoose.model('food', FoodScheme);
module.exports = Foods;
