const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: { type: String },
	password: { type: String },
	role: { type: String },
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = { UserModel };
