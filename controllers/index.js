const router = require("express").Router();
const dashboardRoutes = require("./dashboard-routes");
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/", dashboardRoutes);
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send(404).end();
});

module.exports = router;
