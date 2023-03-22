const User = require('../model/user.model');

// Add new user
const createUser = async (req, res) => {
	console.log(req.body);
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

// Get user by user id
const getUserById = async (req, res) => {
	console.log(req.params.email);
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

// update
const updateUserById = async (req, res) => {
	const data = req.body;
	console.log(req.params.email);
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
	createUser,
	getUserById,
	updateUserById,
};
