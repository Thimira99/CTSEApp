const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const mainCategory = require('../controller/mainCategoryControler');

const dishes = require('../controller/dishesController');
const Subdishes = require('../controller/subdishContoller');
const favDish = require('../controller/s_FavDishListController');

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



	//main category
	router.post('/createMainCategory', mainCategory.createMainCategory);
	router.get('/getallCategories', mainCategory.getallCategories);

	router.post('/createDishesCard', dishes.createDishesCard);
	router.get('/detailsById/:id', dishes.getPlaceOrderById);


	router.post('/createSubDishesCard', Subdishes.createSubDishesCard);
	router.get('/getdishesById/:id', Subdishes.getdishesById);


	router.post('/createdishList', favDish.createdishList);
	router.get('/getallFavDish', favDish.getallFavDish);

	return router;
};
