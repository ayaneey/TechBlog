const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// Find comments
router.get("/", async (req, res) => {
	try {
		const commentData = await Comment.findAll({});
		return res.json(commentData);
	} catch (error) {
		res.json(error);
	}
});

// Create a comment
router.post("/comments", async (req, res) => {
	try {
		const comment = await Comment.create({
			comment_text: req.body.comment_text,
			user_id: req.body.user_id,
			post_id: req.body.post_id,
		});
		return res.status(201).json(comment);
	} catch (error) {
		res.json(error);
	}
});

// Delete a comment
router.delete("/:id", async (req, res) => {
	try {
		const deleteComment = await Comment.delete({
			where: {
				id: req.params.id,
			},
		});
		if (!deleteComment) {
			res.status(404).json({ message: "No comment found with this id!" });
			return;
		}
		res.status(200).json(deleteComment);
	} catch (error) {
		res.status(500).json(err);
	}
});

module.exports = router;
