const express = require('express');
const router = express.Router();
const ordController = require('../controller/DeliveryPerson/ord.controller');

module.exports = function () {
	//post method
	router.post('/createOrd', ordController.createOrd);

	//get one ord
	router.get('/getOrd/:id', ordController.getOneOrd);

	//get method
	router.get('/getOrds', ordController.getOrds);

	return router;
};
