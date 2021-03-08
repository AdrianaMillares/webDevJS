'use strict';

const { response, request } = require("express");
const express = require("express");
const app = express();


const rutasPeliculas = require("./routes/peliculas");
const rutasOtros = require("./routes/otros");

app.use("/peliculas", rutasPeliculas);
app.use("/otros", rutasOtros);

app.use("/", (request, response, next) => {
  let html = "<h1>Paola Adriana Millares Forno</h1>";
  html += "<h3>Las rutas son:</h3>";
  html +=
    "<p><ul><li>/home</li><li>/peliculas</li><li>/peliculas/nueva-pelicula</li><li>/series</li><li>/musica</li></ul></p>";
  response.send(html);
});

app.use((request, response, next) => {
  response.status(404);
  response.send("Error 404: Page not found");
});

app.listen(5000);