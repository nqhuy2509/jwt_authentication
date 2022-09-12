const jwt = require('jsonwebtoken');

require('dotenv').config();

const veryfyToken = (req, res, next) => {
	const token =
		req.body.token || req.query.token || req.headers['x-access-token'];

	if (!token) {
		return res.json({ msg: 'Not token required to authentication' });
	}
	try {
		const decode = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decode;
	} catch (error) {
		return res.json({ msg: 'Invalid token' });
	}
	return next();
};

module.exports = { veryfyToken };
