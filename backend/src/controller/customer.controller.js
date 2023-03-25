const Customer = require('../model/customer.model');
const Food  =  require('../model/food.model');

// Add new place order
const addOrderDetails = async (req, res) => {
	if (req.body) {
		const placeOrder = new Customer(req.body);
		await placeOrder
			.save()
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

// Get order by order id
const getPlaceOrderById = async (req, res) => {
	if (req.params.id) {
		await Customer.find({ _id: req.params.id })
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

// Get user by user id
const getOneOrder = async (req, res) => {
	if (req.params.id) {
		await Customer.find({ _id: req.params.id })
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

//get all oder details
const getDetails = async (req, res) => {
	Customer.find().exec((err, customers) => {
		if (err) {
			return res.status(400).json({
				error: err,
			});
		}
		return res.status(200).json({
			success: true,
			customers,
		});
	});
};

//get all food
const getFoods = async (req, res) => {
	Food.find().exec((err, foods) => {
		if (err) {
			return res.status(400).json({
				error: err,
			});
		}
		return res.status(200).json({
			success: true,
			foods,
		});
	});
};

// update
const updateOrderById = async (req, res) => {
	const data = req.body;
	if (req.params.id) {
		await Customer.findOneAndUpdate({ _id: req.params.id }, data)
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

//delete room from the system
const deleteOrderDetails = async (req, res) => {
    if (req.params.id) {
		await Customer.findByIdAndRemove({ _id: req.params.id })
			.then((data) => {
				res.status(200).send({ 
                    message:"Detail removed successfully!"
                });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};


module.exports = {
	addOrderDetails,
	getPlaceOrderById,
	getOneOrder,
	updateOrderById,
	deleteOrderDetails,
    getDetails,
	getFoods
};
