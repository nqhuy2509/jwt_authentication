const userService = require('../service/userService');

const createNewUser = async (req, res) => {
	try {
		let response = await userService.createNewUser(req.body);
		return res.json(response);
	} catch (error) {
		console.log(error);
	}
};

const userLogin = async (req, res) => {
	try {
		let response = await userService.userLogin(req.body);
		return res.json(response);
	} catch (error) {
		console.log(error);
	}
};

const getAllUser = async (req, res) => {
	try {
		let response = await userService.getAllUser(req.user.role);
		return res.json(response);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { createNewUser, userLogin, getAllUser };
