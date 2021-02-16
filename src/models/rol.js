

const { Model, DataTypes }= require('sequelize');
const sequelize = require('./../Controlador/BD/db');

class rol extends Model{}
	rol.init({
		  
        nombres: DataTypes.STRING},
        {
        sequelize,
        modelName: "rol"
        }
        
        )
        module.exports = rol;
 

