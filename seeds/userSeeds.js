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
	{
		username: "Bob",
		email: "bob@gmail.com",
		password: "sample123",
	},
];

// Data is being transferred over - pre-populated data in the table
const userData = () => User.bulkCreate(seedData);

module.exports = userData;
