const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

module.exports = function () {
	//post method
	router.post('/createUser', userController.createUser);

	//get method
	router.get('/userById/:email', userController.getUserById);

	//get one user
	router.get('/getUser/:id', userController.getOneUser);

	//get method
	router.get('/getUsers', userController.getUsers);

	//update
	router.post('/updateuserById/:email', userController.updateUserById);

	//update
	router.delete('/deleteuserById/:id', userController.deleteUser);

	return router;
};
