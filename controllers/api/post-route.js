const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// Find posts
router.get("/", async (req, res) => {
	try {
		const postData = await Post.findAll({});
		return res.json(postData);
	} catch (error) {
		res.json(error);
	}
});

// Create a post
router.post("/", async (req, res) => {
	try {
		const post = await Post.create({
			title: req.body.title,
			text_content: req.body.text_content,
			user_id: req.body.user_id,
			date: req.body.date,
		});
		return res.status(201).json(post);
	} catch (error) {
		res.json(error);
	}
});

// Delete a post

router.delete("/:id", async (req, res) => {
	try {
		const deletePost = await Post.delete({
			where: {
				id: req.params.id,
			},
		});
		if (!deletePost) {
			res.status(404).json({ message: "No post found with this id!" });
			return;
		}
		res.status(200).json(deletePost);
	} catch (error) {
		res.status(500).json(err);
	}
});

module.exports = router;
