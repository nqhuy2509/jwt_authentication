const mongoose = require('mongoose');

const connectdb = async () => {
	try {
		await mongoose.connect('mongodb://localhost/jwt_authen');
		console.log('Connect database successfully');
	} catch (error) {
		console.log('Connect database failed!!', e);
	}
};

module.exports = connectdb;
