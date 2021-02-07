const TableCliente = require('../models/Cliente')
module.exports= (sequelize,type)=>{
    return sequelize.define('factura',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pagoP: type.STRING,
        idCliente: type.TableCliente.idCliente,
        fecha: type.DATATIME,
        totalDescuentos: type.DOUBLE,
        total: type.DOUBLE,
    })
}