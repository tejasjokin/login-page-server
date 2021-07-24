const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const userSchema = new Schema({
	firstname: {
		type: String
	},
	lastname: {
		type: String
	},
	password: {
		type: String
	},
	email: {
		type: String,
		unique: true
	}
});

const User = mongoose.model('User', userSchema);

module.exports = User;