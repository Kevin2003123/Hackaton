const { Router } = require("express");
const router = Router();
const {getOrders} = require("../controllers/order")



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/orders", getOrders)

module.exports = router;