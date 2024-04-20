const mongoose = require('mongoose');
const { paqueteSchema, transportesSchema, pedidosSchema, enviossSchema } = require('./schemas');

const paqueteModel = mongoose.model('paquete', paqueteSchema);
const transportesModel = mongoose.model('transportes', transportesSchema);
const pedidosModel = mongoose.model('pedidos', pedidosSchema);
const enviosModel = mongoose.model('envios', enviossSchema);


module.exports = {
  paqueteModel,
  transportesModel,
  pedidosModel,
  enviosModel
};