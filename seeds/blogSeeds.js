const Post = require("../models/Post");

const seedData = [
	{
		title: "Blog1",
		text_content: "this is text_content 1",
		user_id: 1,
	},
	{
		title: "Blog2",
		text_content: "this is text_content 2",
		user_id: 2,
	},
	{
		title: "Blog4",
		text_content: "this is text_content 2",
		user_id: 1,
	},
	{
		title: "Blog5",
		text_content: "this is text_content 2",
		user_id: 2,
	},
];

const blogData = () => Post.bulkCreate(seedData);

module.exports = blogData;
