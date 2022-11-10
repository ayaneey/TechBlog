const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/", async (req, res) => {
	try {
		// Get all users, sorted by name
		const userData = await User.findAll({
			attributes: { exclude: ["password"] },
			order: [["name", "ASC"]],
		});

		res.status(200).json(userData);
	} catch (err) {
		res.status(400).json(err);
	}
});

// Sign up for new user
router.post("/", async (req, res) => {
	try {
		const userData = await User.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});
		res.status(200).json(userData);
	} catch (err) {
		res.status(400).json(err);
	}
});

// Get one user

// Update a user

// Delete a user

module.exports = router;
