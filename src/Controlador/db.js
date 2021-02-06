const Sequelize = require('sequelize');
const ProductoTable = require('../models/producto');

const sequelize = new Sequelize('bd_tiendaonline','root','12345',{
    host: 'localhost',
    dialect: 'mysql'

});

const Producto = ProductoTable(sequelize,Sequelize);

sequelize.sync({force: false})
    .then(()=>{
        console.log("Tabla sincronizada")
    })

module.exports={
    Producto
}