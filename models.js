const mongoose = require('mongoose');
const { paqueteSchema } = require('./schemas');

const paqueteModel = mongoose.model('paquete', paqueteSchema);
const transportesModel = mongoose.model('transporte', transportesSchema);

module.exports = {
  paqueteModel,
  transportesModel
};