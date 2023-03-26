const express = require('express');
const router = express.Router();
const ordController = require('../controller/DeliveryPerson/ord.controller');
const noteController = require('../controller/DeliveryPerson/note.controller');

module.exports = function () {
	//create order route
	router.post('/createOrd', ordController.createOrd);

	//get all ord route
	router.get('/getOrds', ordController.getOrds);

	//get single ord route
 	router.get('/getOrd/:id', ordController.getOneOrd);
 
	//create note route
	router.post('/createNote', noteController.createNote);

	//get all notes route
	router.get('/getNotes', noteController.getNotes);

	//get single note route
 	router.get('/getNotes/:id', noteController.getOneNote);

	//get single note by title route
	router.get('/getNotes/:title', noteController.getNoteByTitle);

	//update note route
	router.put('/getNotes/update/:id', noteController.updateNote);

	//delete note route
	router.delete('/getNotes/delete/:id', noteController.deleteNote);

	return router;
};
