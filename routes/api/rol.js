const express = require('express');
const router = express.Router();
const rol = require('./../../src/models/rol');

router.get('/',(req,res) => {
	rol.findAll().then(rol => {
		res.json(rol);
	})	
})

router.post('/',(req,res) => {
	rol.create({
		
		nombres: req.body.nombres
	}).then(rol => {
		res.json(rol)
	})
})

router.get('/:id',(req,res) => {
	rol.findByPk(req.params.id).then(rol => {
		res.json(rol);
	})
})

router.patch('/:id',(req,res) => {
	rol.update({
		nombres: req.body.nombres},{
			where:{
				id: req.params.id
			}
		
	}).then(result => {
		res.json(result);
	})
})


router.delete('/:id',(req,res) => {
	rol.destroy({
		where:{
			id: req.params.id
		}
	}).then(result => {
		res.json(result);
	})

})



module.exports = router;
