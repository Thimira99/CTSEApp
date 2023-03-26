const User = require('../model/dishFavList');

// Add new user
const createdishList = async (req, res) => {
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

const getallFavDish = async (req, res) => {
	User.find().exec((err, users) => {
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
const updateFavDishById = async (req, res) => {
	const data = req.body;
	if (req.params.email) {
		await User.findOneAndUpdate({ email: req.params.email }, data)
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};



module.exports = {
	createdishList,
    getallFavDish,
	updateFavDishById
	
};
