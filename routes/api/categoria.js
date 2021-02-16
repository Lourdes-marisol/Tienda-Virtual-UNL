const express = require('express');
const router = express.Router();
const categoria = require('./../../src/models/categoria');

router.get('/',(req,res) => {
	categoria.findAll().then(categoria => {
		res.json(categoria);
	})	
})

router.post('/',(req,res) => {
	categoria.create({
		
		nombre: req.body.nombre,
        descripcion: req.body.descripcion
	}).then(categoria => {
		res.json(categoria)
	})
})

router.get('/:id',(req,res) => {
	categoria.findByPk(req.params.id).then(categoria => {
		res.json(categoria);
	})
})

router.patch('/:id',(req,res) => {
	categoria.update({
		
		nombre: req.body.nombre,
        descripcion: req.body.descripcion},{
			where:{
				id: req.params.id
			}
		
	}).then(result => {
		res.json(result);
	})
})


router.delete('/:id',(req,res) => {
	categoria.destroy({
		where:{
			id: req.params.id
		}
	}).then(result => {
		res.json(result);
	})

})



module.exports = router;
