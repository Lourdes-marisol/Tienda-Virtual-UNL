const router = require('express').Router;

const apiProducto = require ('../api/producto');

router.use('/producto', apiProducto);

module.exports = router;