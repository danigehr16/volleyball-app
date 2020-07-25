const eventRoutes = require("./eventsRoutes");
const router = require("express").Router();


// event routes
router.use("./eventsRoutes.js", eventRoutes);


module.exports = router;
