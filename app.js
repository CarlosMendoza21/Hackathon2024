const express = require('express');
const path = require('path');

const app = express();

const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/logistica';
const { paqueteModel } = require('./models');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

const port = 27017;

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


