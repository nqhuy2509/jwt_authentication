const { UserModel } = require('../models/user');
const { generateToken } = require('../helpers/jwtHelper');
const res = require('express/lib/response');

const createNewUser = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let { username, password } = data;
			if (!username || !password) {
				resolve({
					errorCode: 1,
					msg: 'Missing require parameters',
				});
			} else {
				await UserModel.create({ username, password, role: 'user' });
				resolve({
					errorCode: 0,
					msg: 'Create successfully',
				});
			}
		} catch (error) {
			reject(error);
		}
	});
};

const userLogin = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			let { username, password } = data;
			if (!username || !password) {
				resolve({
					errorCode: 1,
					msg: 'Missing require parameters',
				});
			} else {
				let user = await UserModel.findOne({ username, password });
				if (!user) {
					resolve({
						errorCode: 2,
						msg: 'User not found!',
					});
				}
				const accessToken = generateToken(user);

				if (!accessToken) {
					resolve({
						errorCode: 3,
						msg: 'Login not successfully!!',
					});
				}

				user.token = accessToken;

				resolve({ user, accessToken });
			}
		} catch (error) {
			reject(error);
		}
	});
};

const getAllUser = (role) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (role === 'admin') {
				let users = await UserModel.find({});
				if (users) {
					resolve({
						errorCode: 0,
						users,
					});
				}
			} else {
				resolve({
					errorCode: 1,
					msg: 'You can not have access',
				});
			}
		} catch (error) {
			reject(error);
		}
	});
};

module.exports = { createNewUser, userLogin, getAllUser };
