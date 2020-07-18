const eventRoutes = require("./events");
const router = require("express").Router();


// event routes
router.use("./events.js", eventRoutes);


// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

module.exports = router;
