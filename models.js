const mongoose = require('mongoose');
const { paqueteSchema, transportesSchema } = require('./schemas');

const paqueteModel = mongoose.model('paquete', paqueteSchema);
const transportesModel = mongoose.model('transportes', transportesSchema);

module.exports = {
  paqueteModel,
  transportesModel
};