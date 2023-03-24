const Ord = require('../../model/DeliveryPerson/ord.model');

// Add new ord
const createOrd = async (req, res) => {
	if (req.body) {
		const ord = new Ord(req.body);
		await ord
			.save()
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};


// Get ord by ord id
const getOneOrd = async (req, res) => {
	if (req.params.id) {
		await Ord.find({ _id: req.params.id })
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

//get all ords
const getOrds = async (req, res) => {
	Ord.find().exec((err, ords) => {
		if (err) {
			return res.status(400).json({
				error: err,
			});
		}
		return res.status(200).json({
			success: true,
			ords,
		});
	});
};


module.exports = {
	createOrd,
	getOrds,
	getOneOrd
};
