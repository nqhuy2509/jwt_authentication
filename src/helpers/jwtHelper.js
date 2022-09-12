require('dotenv').config();
const jwt_secret = process.env.JWT_SECRET;
const jwt_life = process.env.JWT_LIFE;
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
	return jwt.sign(
		{ id: user.id, username: user.username, role: user.role },
		jwt_secret,
		{
			expiresIn: jwt_life,
		}
	);
};

module.exports = { generateToken };
