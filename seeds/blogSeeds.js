const Post = require("../models/Post");

const seedData = [
	{
		username: "Ayan",
		user_id: 1,
		text_content: "this is text_content 1",
		date: "10/22/2022",
		title: "Blog1",
	},
	{
		username: "Alex",
		user_id: 2,
		text_content: "this is text_content 2",
		date: "10/22/2022",
		title: "Blog2",
	},
];

const blogData = Post.bulkCreate(seedData);

module.exports = blogData;
