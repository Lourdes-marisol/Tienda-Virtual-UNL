const router = require("express").Router();

const apiProductosRouter = require("../routes/api/productos");
const apiClientesRouter = require("../routes/api/clientes");

router.use("/productos", apiProductosRouter);
router.use("/clientes", apiClientesRouter);
module.exports = router;
