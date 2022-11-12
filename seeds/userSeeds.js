const User = require("../models/User");

const seedData = [
	{
		username: "Ayan",
		email: "ayan.h18@hotmail.com",
		password: "password123",
	},
	{
		username: "Alex",
		email: "alex@gmail.com",
		password: "testpassword12",
	},
];

// Data is being transferred over - pre-populated data in the table
const userData = () => User.bulkCreate(seedData);

module.exports = userData;
