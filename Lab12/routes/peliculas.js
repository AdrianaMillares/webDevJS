// Librerias
const express = require("express");
const router = express.Router();
const path = require('path');
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

router.get("/AgregarPelicula", (request, response, next) => {
  response.render('agregarPeliculas');
});

router.post("/AgregarPelicula", (request, response, next) => {
  peliculas.push(request.body.nombre);
  fs.appendFileSync("peliculas.txt", request.body.nombre + "\n");
  response.redirect("/peliculas");
});

router.use("/Peliculas", (request, response, next) => {
  response.render('peliculas', {lista_peliculas: peliculas });
});


module.exports = router;
