// Librerias
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const fs = require("fs");

router.use(bodyParser.urlencoded({ extended: false }));

const peliculas = [
  "Slumdog millionaire",
  "How to lose a guy in 10 days",
  "Cementerio de elefantes",
];
 

peliculas.forEach((pelicula) => {
  fs.appendFileSync("pelicula.txt", peliculas + "\n");
});

router.get("/agregar-pelicula", (request, response, next) => {
  response.send(
    '<h1>Agregar pelicula</h1><form action="agregar-pelicula" method="POST"><input type="text" name="nombre"><input type="submit" value="Agregar una pelicula"></form>'
  );
});

router.post("/agregar-pelicula", (request, response, next) => {
  peliculas.push(request.body.nombre);
  fs.appendFileSync("peliculas.txt", request.body.nombre + "\n");
  response.redirect("/peliculas");
});

router.use("/", (request, response, next) => {
  let html = "<h1>peliculas</h1><ul>";
  peliculas.forEach((pelicula) => {
    html += "<li>" + pelicula + "</li>";
  });
  html += "</ul>";
  response.send(html);
});

module.exports = router;
