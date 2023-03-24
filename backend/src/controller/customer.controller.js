const Customer = require('../model/customer.model');

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
	if (req.params.email) {
		await User.find({ email: req.params.email })
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

//get all users
// const getUsers = async (req, res) => {
// 	User.find().exec((err, users) => {
// 		if (err) {
// 			return res.status(400).json({
// 				error: err,
// 			});
// 		}
// 		return res.status(200).json({
// 			success: true,
// 			users,
// 		});
// 	});
// };

// update
const updateOrderById = async (req, res) => {
	const data = req.body;
	if (req.params.email) {
		await Customer.findOneAndUpdate({ email: req.params.email }, data)
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
    Customer.findByIdAndRemove(req.params.id).exec((err, deletedDetails) => {
        if (err) {
            return res.status(400).json({
                message: "Couldn't delete the details something is wrong!", deletedDetails
            });
        }
        return res.status(200).json({
            success: "Details removed successfully!", deletedDetails
        });
    });
};


module.exports = {
	addOrderDetails,
	getPlaceOrderById,
	getOneOrder,
	updateOrderById,
	deleteOrderDetails
    
};
