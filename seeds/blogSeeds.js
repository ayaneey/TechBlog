const Post = require("../models/Post");

const seedData = [
	{
		title: "Why MVC is so important",
		text_content:
			"MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
		user_id: 1,
	},
	{
		title: "Authentication vs. Authorization",
		text_content:
			"There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system. ",
		user_id: 2,
	},
	{
		title: "Object-Relational Mapping",
		text_content:
			"I have really enjoyed learning about ORM. It's really simplified the way I create queries in SQL",
		user_id: 1,
	},
];

const blogData = () => Post.bulkCreate(seedData);

module.exports = blogData;
