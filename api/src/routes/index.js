const { Router } = require("express");

const userRoutes = require("./user");
const restaurantRoutes = require("./restaurant")
const LocationRoutes =  require("./Location")
const DishRoutes =  require("./dish")
const orderRoutes = require("./order")
const router = Router();

router.use("/", userRoutes);
router.use("/", restaurantRoutes )
router.use("/", LocationRoutes )
router.use("/", DishRoutes )
router.use("/", orderRoutes )


module.exports = router;