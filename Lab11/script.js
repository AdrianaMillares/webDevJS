const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/alguna-ruta', (request, response, next) => {
    console.log(request.body);
});

//Rutas 
app.use('/respuesta', (request, response, next) => {
    response.send('<h1>Respuesta</h1>'); 
});

// use recibe 3 parametros, req, res, next
// next sirve para avanzar, si no existe es una hoja 
// send manda respuestas, solo se usa 
app.use((request, response, next) => {
    console.log('¡Hola mundo!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});
// redireccion 
// response.statusCode = 302;
// response.setHeader("Location", "/ruta");
app.listen(3000);