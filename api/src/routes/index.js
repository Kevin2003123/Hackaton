const { Router } = require("express");

const userRoutes = require("./user");
const restaurantRoutes = require("./restaurant")
const LocationRoutes =  require("./Location")
const DishRoutes =  require("./dish")
const router = Router();

router.use("/", userRoutes);
router.use("/", restaurantRoutes )
router.use("/", LocationRoutes )
router.use("/", DishRoutes )


module.exports = router;