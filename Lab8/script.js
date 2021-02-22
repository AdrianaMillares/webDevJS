// server .js

'use strict';
const http = require('http');
const  server  = require('https');

constserver = http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hola Mundo');
});

server.listen(8000);