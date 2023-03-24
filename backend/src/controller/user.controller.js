const User = require('../model/user.model');

// Add new user
const createUser = async (req, res) => {
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
const getOneUser = async (req, res) => {
	if (req.params.id) {
		await User.find({ _id: req.params.id })
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

//get all users
const getUsers = async (req, res) => {
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
const updateUserById = async (req, res) => {
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
	createUser,
	getUserById,
	updateUserById,
	getUsers,
	getOneUser
};
