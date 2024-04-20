const mongoose = require('mongoose');

const paqueteSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true
  },
  peso_maximo: {
    type: Number,
    required: true
  },
  tamanio:{
    type: Object,
    required: true
  }
});

const transportesSchema = new mongoose.Schema({
  peso_soportado_kg: {
    type: Number,
    required: true
  },
  altura_maxima_m: {
    type: Number,
    required: true
  },
  ancho_maximo_m:{
    type: Number,
    required: true
  },
  largo_maximo_m:{
    type: Number,
    required: true
  }
});

module.exports = {
  paqueteSchema,
  transportesSchema
}