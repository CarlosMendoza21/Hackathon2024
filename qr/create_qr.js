function createQR(tipoPeso,tamano){
  const QRCode = require('qrcode');

  QRCode.toFile('file.png', "{tipo: "+tipoPeso+", tamano:{ ancho_maximo : "+tamano[0]+", largo_maximo: tamano[1]} }}", {
    errorCorrectionLevel: 'H'
  }, function(err) {
    if (err) throw err;
    console.log('QR code saved!');
  });
}