const router = require("express").Router();
const apiRoutes = require("./api");
const HTMLRoutes = require("./html/html-routes");

router.use("/", HTMLRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("404 Error");
});

module.exports = router;
