const router = require("express").Router();
const eventControllers = require ("../../controllers/eventsController");

router.route("/")
    .get(eventControllers.findAll)
    .post(eventControllers.create);

router
    .route("/:id")
    .get(eventControllers.findById)
    .put(eventControllers.update)
    .delete(eventControllers.remove);

    module.exports = router;