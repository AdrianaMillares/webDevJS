const express = require("express");

const router = express.Router();

router.get("/peliculas", (request, response, next) => {
  response.send('Respuesta de la ruta "/modulo/ruta"');
});

module.exports = router;
