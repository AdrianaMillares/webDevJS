// Librerias
const express = require("express");
const router = express.Router();
const path = require('path');
const bodyParser = require("body-parser");
const peliculasController = require('../controllers/peliculas_controller');

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/AgregarPelicula", (peliculasController.getNuevaPelicula));

router.post("/AgregarPelicula", (peliculasController.postNuevaPelicula));

router.use("/Peliculas", (peliculasController.getpelicula));


module.exports = router;
