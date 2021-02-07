module.exports = (sequelize, type) => {
  const cliente = sequelize.define("Cliente", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombres: type.STRING,
    correo: type.STRING(30),
    telefono: type.STRING,
    clave: type.STRING,
    edad: type.INTEGER,
  });

  cliente.associate = function (models) {
    cliente.hasOne(models.producto, {
      foreignKey: "id_Cliente",
      as: "Producto",
    });
    cliente.belongsTo(models.rol, { foreignKey: "id_rol" });
  };
  return cliente;
};
