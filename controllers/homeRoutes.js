const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const sequelize = require("../config/connection");

// Find all posts for homepage
router.get("/", async (req, res) => {
	try {
		const postData = await Post.findAll({
			attributes: ["id", "title", "text_content"],
			include: [
				{
					model: User,
					attributes: ["username"],
				},
				{
					model: User,
					attributes: ["username"],
				},
			],
		}); // sending over 'loggedIn' session variable to the 'homepage' template
		const posts = postData.map((post) => post.get({ plain: true }));
		res.status(200).render("homepage", {
			posts,
			loggedIn: req.session.loggedIn,
			username: req.session.username,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
});

router.get("/dashboard", (req, res) => {
	console.log("inside dashboard route");
	res.render("dashboard");
});

// Login route
router.get("/login", (req, res) => {
	console.log(req.body);
	// If the user is already logged in, redirect to the homepage
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}
	// Otherwise, render the 'login' template
	res.render("login");
});

router.get("/signup", (req, res) => {
	res.render("signup");
});

router.get("/post/:id", (req, res) => {
	Post.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ["id", "title", "text_content"],
		include: [
			{
				model: Comment,
				attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
				include: {
					model: User,
					attributes: ["username"],
				},
			},
		],
	})
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: "No post found with this id" });
				return;
			}
			const post = dbPostData.get({ plain: true });
			console.log(post);
			res.render("single-post", { post, loggedIn: req.session.loggedIn });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/posts-comments", (req, res) => {
	Post.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ["id", "content", "title", "created_at"],
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
			if (!dbPostData) {
				res.status(404).json({ message: "No post found with this id" });
				return;
			}
			const post = dbPostData.get({ plain: true });

			res.render("posts-comments", { post, loggedIn: req.session.loggedIn });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
