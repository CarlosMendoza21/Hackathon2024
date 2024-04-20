const mongoose = require('mongoose');
const { paqueteSchema } = require('./schemas');

const paqueteModel = mongoose.model('paquete', paqueteSchema);

module.exports = {
  paqueteModel
};