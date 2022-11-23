const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// Find all users
router.get("/", async (req, res) => {
	try {
		const users = await User.findAll({});
		return res.json(users);
	} catch (error) {
		res.json(error);
	}
});

// Login
router.post("/login", async (req, res) => {
	try {
		const dbUserData = await User.findOne({
			where: {
				email: req.body.email,
			},
		});

		if (!dbUserData) {
			res.status(400).json({
				message: "Incorrect email or password. Please try again! Testing 1",
			});
			return;
		}

		const validPassword = await dbUserData.checkPassword(req.body.password);

		if (!validPassword) {
			res.status(400).json({
				message: "Incorrect email or password. Please try again! Testing 2",
			});
			return;
		}

		// Once the user successfully logs in, set up the sessions variable 'loggedIn'
		req.session.save(() => {
			req.session.loggedIn = true;
			// res
			// 	.status(200)
			// 	.json({ user: dbUserData, message: "You are now logged in!" });
			res.render("/dashboard");
		});
		req.session.save(() => {
			req.session.loggedIn = true;
			req.session.email = userData.email;
			req.session.userId = userData.id;
			req.session.username = userData.username;
		});
	} catch (err) {
		console.log(err);
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
		// console.log(userData);
		req.session.save(() => {
			req.session.loggedIn = true;
			req.session.email = userData.email;
			req.session.userId = userData.id;
			req.session.username = userData.username;
			res.json(userData);
		});
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
