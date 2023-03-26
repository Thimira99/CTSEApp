const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	idoftheDish: {
		type: String,
		required: true,
		trim: true,
    },
	title: {
		type: String,
		required: true,
		trim: true,
    },
	genre: {
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
		trim: true,
    },
	imgUrl: {
		type: String,
		required: true,
		trim: true,
    }
	// imgUrl2: {
	// 	type: String,
	// 	required: true,
	// 	trim: true,
    // }
	
});

const s_FavDishList = mongoose.model('s_FavDishList', UserSchema);
module.exports = s_FavDishList;
