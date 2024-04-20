const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/logistica';
const { paqueteModel } = require('./models');

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
    const peso_gr = req.body?.peso;
    const altura_cm = req.body?.altura;
    const ancho_cm = req.body?.ancho;
    const largo_cm = req.body?.largo;


    if (!name || !age) {
      return res.status(400).json({ message: 'Bad request, name or age not found' });
    }
    const paquete = new paqueteModel({
      peso_gr,
      altura_cm,
      ancho_cm,
      largo_cm
    });

    const save = await author.save();
    return res.status(201).json({ author: save });
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
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

