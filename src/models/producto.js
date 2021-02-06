
module.exports= (sequelize,type)=>{
    return sequelize.define('producto',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreP: type.STRING,
        categoria: type.STRING,
        tallaP: type.INTEGER,
        estadoP: type.STRING,
        imagenP: type.STRING,
        precioP: type.DOUBLE,
        descripcionP: type.STRING
    })
}