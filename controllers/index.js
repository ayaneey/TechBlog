const router = require("express").Router();
const dashboardRoutes = require("./dashboard-routes");
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);
router.use("/", homeRoutes);

router.use((req, res) => {
	res.send(404).end();
});

module.exports = router;
