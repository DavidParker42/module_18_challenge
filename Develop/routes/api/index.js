const router = require("express").Router();
const userRouters = require("./user-routes");
const thoughtRouters = require("./thought-routes");

router.use("/users", userRouters);
router.use("/thoughts", thoughtRouters);

module.exports = router;
