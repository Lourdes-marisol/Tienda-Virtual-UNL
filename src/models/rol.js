module.exports = (sequelize, type) => {
  const rol = sequelize.define("rol", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombres: type.STRING,
  });

  rol.associate = function (models) {
    rol.hasMany(models.cliente, {
      foreignKey: "id_Rol",
      as: "Cliente",
    });
  };
  return rol;
};
