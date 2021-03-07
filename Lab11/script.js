const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

// use recibe 3 parametros, req, res, next
// next sirve para avanzar, si no existe es una hoja 
// send manda respuestas, solo se usa 
app.use((request, response, next) => {
    console.log('¡Hola mundo!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);