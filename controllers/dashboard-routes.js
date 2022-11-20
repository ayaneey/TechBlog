const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

// Import the custom middleware
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
	res.render("dashboard");
});

// get all posts
router.get("/", withAuth, (req, res) => {
	Post.findAll({
		where: {
			user_id: req.session.user_id,
		},
		attributes: ["id", "title", "content", "created_at"],
		include: [
			{
				model: Comment,
				attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
				include: {
					model: User,
					attributes: ["username"],
				},
			},
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbPostData) => {
			const posts = dbPostData.map((post) => post.get({ plain: true }));
			res.render("dashboard", { posts, loggedIn: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// Fetching one post
router.get("/edit/:id", withAuth, async (req, res) => {
	try {
		const getPost = await Post.findByPk("1", {
			attributes: ["id", "title", "text_content", "date"],
			include: [
				{
					model: User,
					attributes: ["username"],
				},
				{
					model: Comment,
					attributes: [
						"id",
						"comment_text",
						"post_id",
						"user_id",
						"created_at",
					],
					include: {
						model: User,
						attributes: ["username"],
					},
				},
			],
		});
		const post = getPost.map((post) => post.get({ plain: true }));
		res.status(200).render("homepage", {
			post,
			loggedIn: true,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
});

/* Refactored code */ // DISCARD BELOW!!

// router.get("/edit/:id", withAuth, (res, req) => {
// 	Post.findOne({
// 		where: {
// 			id: req.params.id,
// 		},
// 		attributes: ["id", "title", "content", "created_at"],
// 		include: [
// 		{
// 			model: User,
// 			attributes: ["username"],
// 		},
// 		{
// 			model: Comment,
// 			attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
// 			include: {
// 				model: User,
// 				attributes: ["username"],
// 			},
// 		},
// 	],
// })

// .then((dbPostData) => {
//     if (!dbPostData) {
//         res.status(400).json({ message: "No post matches this id!" });
//         return;
//     }
//     // Serialize user data in order for templates to read it
//     const post = dbPostData.get({ plain: true });

//     // Now pass serialized data into Handlebars.js template
//     res.render("edit-post", { post, loggedIn: true });
// })
// .catch((err) => {
//     console.log(err);
//     res.status(500).json(err);
// });
// });

// Rendering new post
router.get("/new", (req, res) => {
	res.render("new-post");
});

module.exports = router;
