const Food = require('../model/food.model');

const createFood = async (req, res) => {
	if (req.body) {
		const food = new Food(req.body);
		await food
			.save()
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};


//get all users
const getFoods = async (req, res) => {
	Food.find().exec((err, users) => {
		if (err) {
			return res.status(400).json({
				error: err,
			});
		}
		return res.status(200).json({
			success: true,
			users,
		});
	});
};


// update
const updateFoodById = async (req, res) => {
	const data = req.body;
	if (req.params.id) {
		await Food.findOneAndUpdate({ _id: req.params.id }, data)
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

// delete note
const deleteFoods = async (req, res) => {
	if (req.params.id) {
		await Food.findByIdAndRemove({ _id: req.params.id })
			.then((data) => {
				res.status(200).send({ 
                    message:"Food removed successfully!"
                });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

// Get user by user id
const getOneFood = async (req, res) => {
	if (req.params.id) {
		await Food.find({ _id: req.params.id })
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

module.exports = {
	createFood,
    getFoods,
	deleteFoods,
    updateFoodById,
	getOneFood
};
