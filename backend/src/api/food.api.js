const express = require('express');
const router = express.Router();
const foodController = require('../controller/food.controller');

module.exports = function () {
	//post method
	router.post('/createFood', foodController.createFood);

	//get method
	router.get('/getFoods', foodController.getFoods);

    //update
	router.post('/updateFoodById/:id', foodController.updateFoodById);

	//update
	router.delete('/deleteFoodById/:id', foodController.deleteFoods);

	//get one user
	router.get('/getAFood/:id', foodController.getOneFood);

	return router;
};
