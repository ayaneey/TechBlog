const router = require("express").Router();

const userRoutes = require("./user-route");

const postRoutes = require("./post-route");

const commentRoutes = require("./comment-route");

const authRoute = require("./auth-route");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comment", commentRoutes);
router.use("/auth", authRoute);

module.exports = router;
