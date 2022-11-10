const withAuth = (req, res, next) => {
	// If user is not logged in, re-direct them to login page
	if (!req.session.loggedIn) {
		res.redirect("/login");
	} else {
		// Therefore, if user is logged in, execute the route function that will allow them to view the posts
		next(); // We call next() only if the user is authenticated
	}
};

module.exports = withAuth;
