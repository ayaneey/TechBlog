const Comment = require("../models/Comment");

const seedData = [
	{
		comment_text: "hello",
		user_id: 1,
		post_id: 2,
		text_content: "this is comment 1",
		date: "10/22/2022",
	},
];

const commentData = () => Comment.bulkCreate(seedData); // exporting the function

module.exports = commentData;
