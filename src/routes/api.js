const express = require('express');
const UserController = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

const initRouter = (app) => {
	router.get('/', (req, res) => {
		return res.json({ msg: 'Hello world' });
	});

	router.post('/signup', UserController.createNewUser);
	router.post('/login', UserController.userLogin);

	router.get('/get-all-user', auth.veryfyToken, UserController.getAllUser);

	return app.use(router);
};

module.exports = initRouter;
