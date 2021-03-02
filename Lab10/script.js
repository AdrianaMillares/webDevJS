
'use strict';
const fs = require("fs");
const path = require("path");
const http = require('http');
const { response } = require("express");

const server = http.createServer(function(req, res){
     if(req.url === "/"){
        fs.readFile('../Lab10/index.html', function(error, data){ 
        res.write(data);
        return res.end();
     });
     }
     else if(req.url === "/peliculas" || req.url === "/Peliculas"){
        res.write("<html>");
        res.write("<head><title>Peliculas</title></head>");
        res.write("<body><h1>Peliculas</h1><ul><li>Slumdog millionaire</li><li>How to lose a guy in 10 days</li><li>Cementerio de elefantes</li></ul></body>");
        res.write("</html>");
    }
    else if(req.url === "/series" || req.url === "/Series"){
        res.write("<html>");
        res.write("<head><title>Series</title></head>");
        res.write("<body><h1>Series</h1><ul><li>Friends</li><li>Avatar</li><li>How I Met Your Mother</li></ul></body>");
        res.write("</html>");
    }
    else if(req.url === "/musica" || req.url === "/Musica"){
        res.write("<html>");
        res.write("<head><title>Musica</title></head>");
        res.write("<body><h1>Musica</h1><ul><li>Yegua - Los Babasonicos</li><li>Scrawny - Wallows</li><li>Odiame - Efecto Mandarina</li></ul></body>");
        res.write("</html>");
    }
    else{
        res.statusCode = 404;
        res.write("<html>");
        res.write("<head><title>Not found</title></head>");
        res.write("<body><h1>Page not found</h1></body>");
        res.write("</html>");
    }

});

server.listen(3000);