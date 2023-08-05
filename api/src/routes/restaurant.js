const { Router } = require("express");
const router = Router();
const {getRestaurants } = require("../controllers/restaurant")



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/restaurant", getRestaurants)

module.exports = router;