const router = require('express').Router();
const {Factura} = require('../../src/Controlador/db');

//Mostrar productos generales
router.get('/', async (req, res)=>{
    const facturas = await Factura.findAll();
    res.json(facturas);
});

///Generar Factura 
router.post('/', async (req, res)=>{
    const errors = validationResult(req);
    ///Validar los campos vacíos
    if(!errors.isEmpty()){
        return res.status(422).json({errores: errors.array()})
    }
        const facturas= await Factura.create(req.body);
        res.json(facturas);
});


///Borrar un producto
router.delete('/:facturaId', async(req,res)=>{
    await Factura.destroy({
        where: {id : req.params.facturaId}
    });
    res.json({sucess: 'Se ha borrado el producto'})
});

module.exports = router;