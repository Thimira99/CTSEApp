const User = require('../model/mainCategory');

// Add new user
const createMainCategory = async (req, res) => {
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

const getallCategories = async (req, res) => {
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



module.exports = {
	createMainCategory,
    getallCategories
	
};
