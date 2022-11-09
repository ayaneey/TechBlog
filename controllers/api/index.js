const router = require("express").Router();

const userRoutes = require("./user-route");

const blogRoutes = require("./blog-route");

const commentRoutes = require("./comment-route");

const authRoute = require("./auth-route");

router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
router.use("/comment", commentRoutes);
router.use("/auth", authRoute);

module.exports = router;
