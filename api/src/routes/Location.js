const { Router } = require("express");
const router = Router();
const {getLocations} = require("../controllers/location")



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post("/location", getLocations)

module.exports = router;