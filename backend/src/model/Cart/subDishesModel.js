const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	
    mainDishId: {
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
    short_description: {
		type: String,
		required: true,
		trim: true,
	},
	price: {
		type: Number,
		required: true,
		trim: true,
	},
	
    
});

const s_SubdishesTable = mongoose.model('s_SubdishesTable', UserSchema);
module.exports = s_SubdishesTable;
