const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const { transportesModel,paqueteModel,enviosModel,pedidosModel } = require('./models');
const uri = 'mongodb://localhost:27017/logistica';
const { MongoClient } = require('mongodb');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const qrcode = require('qrcode');


app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.get('/acomodo', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'acomodo.html'));
});

app.get('/qr', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'qr.html'));
});

const port = 3010;

app.get('/paquete', async (req, res) => {
  try {
    const paquete = req.body?._id([
      {
        $find:{
          _id : "paquete"
        }
      }
    ]);
    return res.json({ paquete });
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/paquete', async (req, res) => {
  try {
    const tipo = req.body?.tipo;
    const peso_gr = req.body?.peso;
   //const altura_cm = req.body?.altura;
   const tamanio = {
      ancho_cm : req.body?.ancho,
      largo_cm : req.body?.largo
    }
    


    if (!name || !age) {
      return res.status(400).json({ message: 'Bad request, name or age not found' });
    }
    const paquete = new paqueteModel({
      tipo,
      peso_gr,
      tamanio
    });

    const save = await author.save();
    return res.status(201).json({ paquete: save });
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/transportes', async (req, res) => {
  try {
    const transportes = req.body?._id([
      {
        $find:{
          _id : "transportes"
        }
      }
    ]);
    return res.json({ transportes });
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/transportes', async (req, res) => {
  try {
    const tipo = req.body?.tipo;
    const peso_gr = req.body?.peso;
   //const altura_cm = req.body?.altura;
   const tamanio = {
      ancho_cm : req.body?.ancho,
      largo_cm : req.body?.largo
    }
    


    if (!name || !age) {
      return res.status(400).json({ message: 'Bad request, name or age not found' });
    }
    const transportes = new transportesModel({
      tipo,
      peso_gr,
      tamanio
    });

    const save = await author.save();
    return res.status(201).json({ paquete: save });
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/envios', async (req, res) => {
  try {
    const envios = req.body?._id([
      {
        $find:{
          _id : "envios"
        }
      }
    ]);
    return res.json({ envios });
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/nuevo-pedido', async (req, res) => {
  const { nombreCliente, ciudadDestino, telefono, tipoPaquete, estado } = req.body;

  try {
      await client.connect();
      const db = client.db("logistica");
      const nuevoPedido = {
          nombre_cliente: nombreCliente,
          ciudad_destino: ciudadDestino,
          telefono: parseInt(telefono),
          tipo_paquete: tipoPaquete,
          estado: estado
      };
      const result = await db.collection('pedido').insertOne(nuevoPedido);

      // Generar el código QR con la información del pedido
      const infoPedido = JSON.stringify(nuevoPedido);
      const pedidoId = result.insertedId;
      const qrPath = path.join(__dirname, 'qrCodes', `${pedidoId}.png`);
      await qrcode.toFile(qrPath, infoPedido);

      res.status(200).send({ message: 'Pedido creado con éxito y código QR generado', data: result.ops[0] });
  } catch (error) {
      res.status(500).send({ message: 'Error al crear el pedido o generar el código QR', error });
  } finally {
      // No cierres la conexión aquí si planeas reutilizarla en otras rutas
  }
});

app.post('/procesar-qr', async (req, res) => {
  try {
     const { _id, ciudad_destino } = req.body; // Extraer el _id y la ciudad_destino del cuerpo de la solicitud
 
     // Crear una expresión regular para buscar la ciudad_destino dentro de ciudad_de
     const regex = new RegExp(ciudad_destino, 'i'); // 'i' para ignorar mayúsculas y minúsculas
 
     // Imprimir la ciudad_destino y la expresión regular para ver qué se está comparando
     console.log(`Buscando documentos donde 'ciudad_de' contenga: ${ciudad_destino}`);
     console.log(`Expresión regular utilizada: ${regex}`);
 
     // Buscar en la colección 'envio' un documento cuya 'ciudad_de' contenga 'ciudad_destino'
     const envio = await Envio.findOne({ ciudad_de: { $regex: regex } });
 
     if (!envio) {
       return res.status(404).json({ message: 'No se encontró un envío para la ciudad destino especificada.' });
     }
 
     // Agregar el '_id' del código QR al mapa 'pedidos'
     envio.pedidos.set(_id, _id);
 
     // Guardar el documento actualizado
     await envio.save();
 
     res.status(200).json({ message: 'El _id del código QR ha sido agregado al envío correspondiente.', envio });
  } catch (error) {
     console.error('Error al procesar el código QR:', error);
     res.status(500).json({ message: 'Error interno del servidor.' });
  }
 });
 

// Asegúrate de tener una ruta para iniciar el servidor
app.listen(3012, () => {
 console.log('Servidor corriendo en http://localhost:3000');
});



app.listen(process.env.PORT || 30011, () => {
  console.log("Server is running......");
});

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connection success');
    app.listen(port, () => {
      console.log(`Server listen on http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Connection fail', error);
  });


