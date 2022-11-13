const Comment = require("../models/Comment");

const seedData = [
	{
		comment_text: "hello",
		user_id: 1,
		post_id: 2,
		text_content: "this is comment 1",
		date: "10/22/2022",
	},
	{
		// username: "Alex",
		// text_content: "this is comment 2",
		// date: "10/22/2022",
		// user_id: 2, // the id of the user should be between 1-maximum number of users added in the seed data
		// post_id: 1, // the id of the blog should be between 1-maximum number of blogs added in the seed data
	},
];

const commentData = () => Comment.bulkCreate(seedData); // exporting the function

module.exports = commentData;
