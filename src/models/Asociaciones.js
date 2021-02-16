const clientes = require('./clientes');
const factura = require('./factura');
const rol = require('./rol');
const producto = require('./producto');
const categoria = require('./categoria');

clientes.hasOne(factura);

clientes.hasOne(rol);

categoria.hasOne(producto);