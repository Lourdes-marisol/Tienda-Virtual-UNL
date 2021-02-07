const router = require('express').Router();
const { check, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const {Cliente} = require('../../src/Controlador/db');

//Mostrar productos generales
router.get('/', async (req, res)=>{
    const clientes = await Cliente.findAll();
    res.json(clientes);
});


router.get('/:clienteId', async (req,res)=>{
    const clientes = await Cliente.findAll();
    res.json(clientes);
});
///Registrar Cliente
router.post('/', [
    check('nombreC','Se debe llenar este campo').not().isEmpty(),
    check('correoElectronicoC','Se debe llenar este campo').not().isEmpty(),
    check('telefonoC','Se debe llenar este campo').not().isEmpty(),
    check('claveC','Se debe llenar este campo').not().isEmpty(),
    check('claveConfirmada','Se debe llenar este campo').not().isEmpty(),
    check('edadC','Se debe llenar este campo').not().isEmpty()
], async (req, res)=>{
    const errors = validationResult(req);
    ///Validar los campos vacíos
    if(!errors.isEmpty()){
        return res.status(422).json({errores: errors.array()})
    }
        req.body.claveC=bcrypt.hashSync(req.body.claveC,5);
        req.body.claveConfirmada= bcrypt.hashSync(req.body.claveConfirmada,5);
        const clientes= await Cliente.create(req.body);
        res.json(clientes);

   
});

///Modificar datos cuenta
router.put('/:clienteId', async (req,res)=>{
    await Cliente.update(req.body,{
        where: { id: req.params.clienteId}
    });
        res.json({sucess: 'Se ha modificado correctamente'})
})

///Dar de baja
router.delete('/:clienteId', async(req,res)=>{
    await Cliente.destroy({
        where: {id : req.params.clienteId}
    });
    res.json({sucess: 'Se ha borrado el cliente'})
});

module.exports = router;