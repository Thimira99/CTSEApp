const mongoose = require('mongoose');

const OrdSchema = new mongoose.Schema({
	orderId: {
		type: String,
		required: true,
		trim: true,
	},
	name: {
		type: String,
		required: true,
		trim: true,
	},
	contactNumber: {
		type: String,
		required: true,
	},
	deliveryAddress: {
		type: String,
		required: true,
	}
});

const Ord = mongoose.model('ords', OrdSchema);
module.exports = Ord;
