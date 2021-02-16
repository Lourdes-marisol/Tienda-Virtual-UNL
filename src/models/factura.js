const { Model, DataTypes }= require('sequelize');
const sequelize = require('./../Controlador/BD/db');

class factura extends Model{}
	factura.init({
		  
        fecha: DataTypes.DATE,
        totalDecuentos: DataTypes.DOUBLE,
        total: DataTypes.DOUBLE,
        tipoPago:DataTypes.STRING},
        {
        sequelize,
        modelName: "factura"
        }
        
        )
        module.exports = factura;
 
