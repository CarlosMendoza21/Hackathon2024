const express = require('express');
const path = require('path');

const app = express();

const mongoose = require('mongoose');
const { transportesModel,paqueteModel,enviosModel,pedidosModel } = require('./models');
const uri = 'mongodb://localhost:27017/logistica';


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

const port = 3000;

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


app.listen(process.env.PORT || 3000, () => {
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


