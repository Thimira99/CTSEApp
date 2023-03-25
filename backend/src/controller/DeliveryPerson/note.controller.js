const Note = require('../../model/DeliveryPerson/note.model');

// Add note
const createNote = async (req, res) => {
	if (req.body) {
		const note = new Note(req.body);
		await note
			.save()
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

//get all notes
const getNotes = async (req, res) => {
	Note.find().exec((err, notes) => {
		if (err) {
			return res.status(400).json({
				error: err,
			});
		}
		return res.status(200).json({
			success: true,
			notes,
		});
	});
};

// Get note by note id
const getOneNote = async (req, res) => {
	if (req.params.id) {
		await   Note.find({ _id: req.params.id })
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};


// update note
const updateNote = async (req, res) => {
	const data = req.body;
	if (req.params.id) {
		await Note.findOneAndUpdate({ _id: req.params.id }, data)
			.then((data) => {
				res.status(200).send({ data: data });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};

// delete note
const deleteNote = async (req, res) => {
	if (req.params.id) {
		await Note.findByIdAndRemove({ _id: req.params.id })
			.then((data) => {
				res.status(200).send({ 
                    message:"Note removed successfully!"
                });
			})
			.catch((error) => {
				res.status(500).send({ error: error.message });
			});
	}
};



module.exports = {
	createNote,
    getNotes,
	getOneNote,
	updateNote,
    deleteNote
	 
};
