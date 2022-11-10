const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

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

// login

// logout

module.exports = router;
