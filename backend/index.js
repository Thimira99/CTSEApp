const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');

// Middleware
dotenv.config();
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

// Establishing the database connection
connectDB();

// Default Path
app.route('/').get((req, res) => {
	res.send('Implementation');
});

//import routes
const userAPI = require('./src/api/user.api');
const foodOfficerAPI = require('./src/api/foodOfficer.api');
const familyAssign = require('./src/api/assignFamily');

// Define routes
app.use('/user', userAPI());
app.use('/foodOfficer', foodOfficerAPI());
app.use('/Family', familyAssign());

// Start listening to the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is up and running on PORT ${PORT}`);
});

module.exports = app;
