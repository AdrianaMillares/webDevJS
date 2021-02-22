// Funciones

//Funcion 1
function problema1(){
    const tam = window.prompt('inserte el tamaño de su arreglo');
	let arreglo = [];
    let promedio = 0;

	for(let i = 1; i <= tam; i++){
        arreglo[i] = window.prompt('inserte el numero ' + i +  'de su arreglo');
        promedio = promedio + arreglo[i];
    }
    promedio = promedio / tam;    
}

// server .js

'use strict';
const http = require('http');

const server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Pregunta 1' + problema1());
});

server.listen(8000);