const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const clientes = require('./../../src/models/clientes');

router.get('/',(req, res) => {
  clientes.findAll().then(clientes => {
		res.json(clientes);})

		
  
});



router.get("/:clienteId", async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
});
///Registrar Cliente
router.post(
  "/",
  [
    check("nombres", "Se debe llenar este campo").not().isEmpty(),
    check("correo", "Se debe llenar este campo").not().isEmpty(),
    check("telefono", "Se debe llenar este campo").not().isEmpty(),
    check("clave", "Se debe llenar este campo").not().isEmpty(),
    check("edad", "Se debe llenar este campo").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    ///Validar los campos vacíos
    if (!errors.isEmpty()) {
      return res.status(422).json({ errores: errors.array() });
    }
    req.body.clave = bcrypt.hashSync(req.body.clave, 5);
    
   

    clientes.create({
		

        nombres: req.body.nombres,
    correo: req.body.correo,
    telefono: req.body.telefono,
    clave: req.body.clave,
    edad: req.body.edad
	}).then(clientes => {
		res.json(clientes)
	})
    
  }
);

///Modificar datos cuenta
router.put("/:clienteId", async (req, res) => {
  await Cliente.update(req.body, {
    where: { id: req.params.clienteId },
  });
  res.json({ sucess: "Se ha modificado correctamente" });
});

///Dar de baja
router.delete("/:clienteId", async (req, res) => {
  await Cliente.destroy({
    where: { id: req.params.clienteId },
  });
  res.json({ sucess: "Se ha borrado el cliente" });
});

module.exports = router;
