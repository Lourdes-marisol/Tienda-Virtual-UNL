const router = require('express').Router();
const { check, validationResult} = require('express-validator');
const {Producto} = require('../../src/Controlador/db');

//Mostrar productos generales
router.get('/', async (req, res)=>{
    const productos = await Producto.findAll();
    res.json(productos);
});

///Mostrar producto selecionado(Corregir)
router.get('/:productoId', async (req,res)=>{
    const producto = await Producto.findAll();
    res.json(producto);
});
///Crear producto 
router.post('/', [
    check('nombreP','Se debe llenar este campo').not().isEmpty(),
    check('categoriaP','Se debe llenar este campo').not().isEmpty(),
    check('tallaP','Se debe llenar este campo').not().isEmpty(),
    check('estadoP','Se debe llenar este campo').not().isEmpty(),
    check('imagenP','Se debe cargar una imagen').not().isEmpty(),
    check('precioP','Se debe llenar este campo').not().isEmpty(),
    check('descripcionP','Se debe llenar este campo').not().isEmpty()
], async (req, res)=>{
    const errors = validationResult(req);
    ///Validar los campos vacíos
    if(!errors.isEmpty()){
        return res.status(422).json({errores: errors.array()})
    }
        const productos= await Producto.create(req.body);
        res.json(productos);

   
});

///Modificar un producto
router.put('/:productoId', async (req,res)=>{
    await Producto.update(req.body,{
        where: { id: req.params.productoId}
    });
        res.json({sucess: 'Se ha modificado correctamente'})
})

///Borrar un producto
router.delete('/:productoId', async(req,res)=>{
    await Producto.destroy({
        where: {id : req.params.productoId}
    });
    res.json({sucess: 'Seha borrado el producto'})
});

module.exports = router;