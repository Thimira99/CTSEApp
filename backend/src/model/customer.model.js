const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	phoneNumber: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
    email: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	
});

const Customer = mongoose.model('placeOrder', CustomerSchema);
module.exports = Customer;
