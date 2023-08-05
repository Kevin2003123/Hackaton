const { Router } = require("express");
const router = Router();
const {getDishes, getDishesByRestaurantId} = require("../controllers/dish")



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dish", getDishes)
router.get("/dish/restaurant/:id", getDishesByRestaurantId)

module.exports = router;