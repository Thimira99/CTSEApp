const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
		trim: true,
	},
	date: {
		type: String,
		required: true,
	},
});

const Note = mongoose.model('notes', NoteSchema);
module.exports = Note;
