const router = require('express').Router();

const apiProductosRouter = require('../routes/api/productos');

router.use('/productos', apiProductosRouter) ;
module.exports = router;