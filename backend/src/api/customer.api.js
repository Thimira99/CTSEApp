const express = require('express');
const router = express.Router();
const customerController = require('../controller/customer.controller');

module.exports = function () {
	//post method
	router.post('/addOrderDetails', customerController.addOrderDetails);

	//get method
	router.get('/detailsById/:email', customerController.getPlaceOrderById);

	//get one user
	router.get('/getDetails/:id', customerController.getOneOrder);

	//update
	router.put('/updateDetailsById/:email', customerController.updateOrderById);

    //delete
	router.delete('/deleteDetailsById/:email', customerController.deleteOrderDetails);


	return router;
};
