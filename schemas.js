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

const pedidosSchema = new mongoose.Schema({
  nombre_cliente:{
    type: String,
    required: true
  },
  ciudad_destino:{
    type: String,
    required: true
  },
  telefono:{
    type: Number,
    required: true
  },
  tipo_paquete:{
    type: String,
    required: true
  },
  estado:{
    type: String,
    required: true
  }
})

const enviossSchema = new mongoose.Schema({
  transporte:{
    type: Object,
    required: true
  },
  ciudad_origen:{
    type: String,
    required: true
  },
  ciudad_destino:{
    type: String,
    required: true
  }
})



module.exports = {
  paqueteSchema,
  transportesSchema,
  pedidosSchema,
  enviossSchema
}