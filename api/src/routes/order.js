const { Router } = require("express");
const router = Router();
const {getOrders, insertOrder, verifyBudgeOrder} = require("../controllers/order")



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post("/order/verify/budget", verifyBudgeOrder)
router.get("/orders", getOrders)
router.post("/order", insertOrder)


module.exports = router;