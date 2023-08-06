const { Router } = require("express");
const router = Router();
const {getRestaurantsByLocationId } = require("../controllers/restaurant")



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/restaurants/:id", getRestaurantsByLocationId)

module.exports = router;