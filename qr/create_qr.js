function createQR(tipoPeso,tamano){
  const QRCode = require('qrcode');

  QRCode.toFile('file.png', '{tipo: '+tipoPeso+', tamano: '+tamano+',}', {
    errorCorrectionLevel: 'H'
  }, function(err) {
    if (err) throw err;
    console.log('QR code saved!');
  });
}