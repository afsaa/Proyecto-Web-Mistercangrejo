const nodemailer = require('nodemailer');
const http = require('http');

/*---Sección de envío de Email---*/
var transportador = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mistercangrejo8@gmail.com',
    pass: 'familiamontano'
  }
});

var Opcionesmail = {
  from: 'mistercangrejo8@gmail.com',
  to: 'mistercangrejo8@gmail.com',
  subject: 'Enviando un mail usando Nodejs',
  text: 'Eso fue facil!'
};

transportador.sendMail(Opcionesmail, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Mensaje enviado: ' + info.response);
  }
});
