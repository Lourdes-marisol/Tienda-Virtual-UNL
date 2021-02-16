const express = require('express');
const router = express.Router();
const factura = require('./../../src/models/factura');

router.get('/',(req,res) => {
	factura.findAll().then(factura => {
		res.json(factura);
	})	
})

router.post('/',(req,res) => {
	factura.create({
		

		fecha: req.body.fecha,
        totalDecuentos: req.body.totalDecuentos,
        total: req.body.total,
        tipoPago:req.body.tipoPago
	}).then(factura => {
		res.json(factura)
	})
})

router.get('/:id',(req,res) => {
	factura.findByPk(req.params.id).then(factura => {
		res.json(factura);
	})
})

router.patch('/:id',(req,res) => {
	factura.update({
		fecha: req.body.fecha,
        totalDecuentos: req.body.totalDecuentos,
        total: req.body.total,
        tipoPago:req.body.tipoPago},{
			where:{
				id: req.params.id

			}
		
	}).then(result => {
		res.json(result);
	})
})


router.delete('/:id',(req,res) => {
	factura.destroy({
		where:{
			id: req.params.id
		}
	}).then(result => {
		res.json(result);
	})

})



module.exports = router;
