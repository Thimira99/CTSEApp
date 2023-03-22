const mongoose = require('mongoose');

//db connection URL
const dbURI =
	'mongodb+srv://teamjustdoit73:7TUU1gyq0WXPXIaX@ctsemobileapp.3ht7q5c.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
	await mongoose.connect(
		dbURI,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		(error) => {
			if (error) {
				console.log('Database Error: ', error.message);
			}
		}
	);

	//check db is connect successfully
	mongoose.connection.once('open', () => {
		console.log('Database connected.');
	});
};

module.exports = connectDB;
