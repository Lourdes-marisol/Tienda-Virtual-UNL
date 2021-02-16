
const { Model, DataTypes }= require('sequelize');
const sequelize = require('./../Controlador/BD/db');

class categoria extends Model{}
	categoria.init({
		  
     
    nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING},
        {
        sequelize,
        modelName: "categoria"
        }
        
        )
        module.exports = categoria;
 
