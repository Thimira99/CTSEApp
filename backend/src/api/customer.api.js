const express = require('express');
const router = express.Router();
const customerController = require('../controller/customer.controller');

module.exports = function () {
	//post method
	router.post('/addOrderDetails', customerController.addOrderDetails);

	//get method
	router.get('/detailsById/:id', customerController.getPlaceOrderById);

	//get one user
	router.get('/getDetails/:id', customerController.getOneOrder);

	//get method
	router.get('/getDetails', customerController.getDetails);

	//get food method
	router.get('/getFood', customerController.getFoods);


	//update
	router.post('/updateDetailsById/:id', customerController.updateOrderById);

    //delete
	router.delete('/deleteDetailsById/:id', customerController.deleteOrderDetails);


	return router;
};
