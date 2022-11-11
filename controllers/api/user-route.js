const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// Sign up for new user
router.post("/signup", async (req, res) => {
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

// logout

router.post("/logout", (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end(); // session is terminated
		});
	}
	res.status(404).end();
});

module.exports = router;
