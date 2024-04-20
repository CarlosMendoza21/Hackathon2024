const mongoose = require('mongoose');
const { paqueteSchema, transportesSchema, pedidosSchema, enviossSchema } = require('./schemas');

const paqueteModel = mongoose.model('paquete', paqueteSchema);
const transportesModel = mongoose.model('transportes', transportesSchema);
const pedidosModel = mongoose.model('paquete', pedidosSchema);
const enviosModel = mongoose.model('transportes', enviossSchema);


module.exports = {
  paqueteModel,
  transportesModel,
  pedidosModel,
  enviosModel
};