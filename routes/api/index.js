const eventRoutes = require("./events");
const router = require("express").Router();


// event routes
router.use("/events", eventRoutes);


module.exports = router;
