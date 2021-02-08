const Sequelize = require("sequelize");
const ProductoTable = require("../models/producto");
const ClienteTable = require("../models/clientes");
const sequelize = new Sequelize("tienda", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const Producto = ProductoTable(sequelize, Sequelize);
const Cliente = ClienteTable(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Tabla sincronizada");
});

module.exports = {
  Producto,
};
module.exports = {
  Cliente,
};
