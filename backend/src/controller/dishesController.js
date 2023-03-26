const User = require('../model/dishesModel');

// Add new user
const createDishesCard = async (req, res) => {
    console.log("insdie backend");
	if (req.body) {
		const user = new User(req.body);
		await user
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
		await User.find({ categoryid: req.params.id })
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};



module.exports = {
	createDishesCard,
    getPlaceOrderById
	
};
