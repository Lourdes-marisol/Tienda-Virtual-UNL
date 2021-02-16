

const { Model, DataTypes }= require('sequelize');
const sequelize = require('./../Controlador/BD/db');

class producto extends Model{}
	producto.init({
		  
         
        nombreP: DataTypes.STRING,
        categoriaP: DataTypes.STRING,
        tallaP: DataTypes.INTEGER,
        estadoP: DataTypes.STRING,
        imagenP: DataTypes.STRING,
        precioP: DataTypes.DOUBLE,
        descripcionP: DataTypes.STRING},
        {
        sequelize,
        modelName: "producto"
        }
        
        )
        module.exports = producto;
 
