const User = require('../model/subDishesModel');

// Add new user
const createSubDishesCard = async (req, res) => {
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
const getdishesById = async (req, res) => {
	if (req.params.id) {
		await User.find({ mainDishId: req.params.id })
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};



module.exports = {
	createSubDishesCard,
    getdishesById
	
};
