const { Router } = require("express");
const router = Router();
const {getOrders, insertOrder, verifyBudgeOrder, getOrdersByRestaurantId, getOrdersByLocation, updateOrderStatus} = require("../controllers/order")



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/order/verify/budget", verifyBudgeOrder)
router.get("/orders", getOrders)
router.post("/order", insertOrder)
router.get("/order/restaurant/:id", getOrdersByRestaurantId)
router.get("/order/location/:id", getOrdersByLocation)
router.put("/order/:id", updateOrderStatus)

module.exports = router;