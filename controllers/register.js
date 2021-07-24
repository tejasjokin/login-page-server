const User = require('../schemas/user.js');

const registerUser = (req, res, bcrypt) => {
	const {firstname, lastname, email, dob, password} = req.body;
	const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
	User.create({
		firstname,
		lastname,
		email,
		dob,
		password: hash
	})
	.then(response => {
		if(response.email)
		{
			res.json({
				email: response.email,
				firstname: response.firstname
			})
		}
	})
	.catch(err => {
		if(err.code===11000)
		{
			return res.status(400).json('exist')
		}
		res.status(400).json('Error')
	})
}

module.exports = {
	registerUser
}