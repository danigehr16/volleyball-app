const router = require("express").Router();
const eventController = require ("../../controllers/eventControllers");

router.route("/")
    .get(eventController.findAll)
    .post(eventController.create);

router
    .route("/:id")
    .get(eventController.findById)
    .get(eventController.update)
    .delete(eventController.remove);

    module.exports = router;