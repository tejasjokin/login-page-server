const User = require('../schemas/user.js');

const loginUser = (req, res, bcrypt) => {
	const {email, password} = req.body;
	User.find({"email": email})
	.then(response => {
		if(response.length)
		{
			const isValid = bcrypt.compareSync(password, response[0].password);
			if(isValid)
			{
				return res.json({
					email: response[0].email,
					firstname: response[0].firstname
				});
			}
			else
			{
				return res.json('wrong');
			}
		}
		else
		{
			return res.json('wrong');
		}
	})
	.catch(err => {
		console.log(err);
		res.status(400).json('Error');
	})
}

module.exports = {
	loginUser
};