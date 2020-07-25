const router = require("express").Router();
const eventControllers = require ("../../controllers/eventControllers");

router.route("/")
    .get(eventControllers.findAll)
    .post(eventControllers.create);

router
    .route("/:id")
    .get(eventControllers.findById)
    .get(eventControllers.update)
    .delete(eventControllers.remove);

    module.exports = router;