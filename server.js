const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const register = require('./controllers/register.js');
const login = require('./controllers/login.js');

const URI="mongodb+srv://analytics:lHK33008NI0waofZ@cluster0.jphzo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(URI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.json('This is working');
})

app.post('/register', (req, res) => {
	register.registerUser(req, res, bcrypt);
})

app.post('/login', (req, res) => {
	login.loginUser(req, res, bcrypt);
})

//assigning port to which server will listen
app.listen(process.env.PORT || 3001, () => {
	console.log(`App is running on ${process.env.PORT}`);
})