const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

module.exports = function () {
	//post method
	router.post('/createUser', userController.createUser);

	//get method
	router.get('/userById/:email', userController.getUserById);

	//update
	router.post('/updateuserById/:email', userController.updateUserById);

	return router;
};
