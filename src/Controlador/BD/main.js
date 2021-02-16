const express= require('express');
const app = express();
const sequelize = require('./db');
const factura = require('./../../models/factura');
const producto = require('./../../models/producto');
const clientes = require('./../../models/clientes');
const categoria = require('./../../models/categoria');
const rol = require('./../../models/rol');
require('./../../models/Asociaciones');

const PORT= process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/',function(req, res){
	res.json('');

})


app.use('/api/clientes',require('./../../../routes/api/clientes'));
app.use('/api/productos',require('./../../../routes/api/productos'));
app.use('/api/factura',require('./../../../routes/api/factura'));
app.use('/api/rol',require('./../../../routes/api/rol'));
app.use('/api/categoria',require('./../../../routes/api/categoria'));


app.listen(PORT, function(){
	console.log('La app ha iniciado');

	sequelize.sync({force: false }).then(() =>{
		console.log('Conectado a la base');
	}).catch(error => {
		console.log('Error');
	})
})