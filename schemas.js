const mongoose = require('mongoose');

const paqueteSchema = new mongoose.Schema({
  peso_gr: {
    type: Number,
    required: true
  },
  altura_cm: {
    type: Number,
    required: true
  },
  ancho_cm: {
    type: Number,
    required: true
  },
  largo_cm:{
    type: Number,
    required: true
  }
});

module.exports = {
  paqueteSchema
}