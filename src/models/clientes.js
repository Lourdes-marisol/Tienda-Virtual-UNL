
const { Model, DataTypes }= require('sequelize');
const sequelize = require('./../Controlador/BD/db');

class clientes extends Model{}
	clientes.init({
		  
     
    nombres: DataTypes.STRING,
    correo: DataTypes.STRING(30),
    telefono: DataTypes.STRING,
    clave: DataTypes.STRING,
    edad: DataTypes.INTEGER,},
        {
        sequelize,
        modelName: "clientes"
        }
        
        )
        module.exports = clientes;
 
