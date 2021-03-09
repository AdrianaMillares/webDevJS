const fs = require("fs");
const Peliculas = require('../models/peliculas');
Peliculas.fetchAll().forEach((pelicula) => {
    fs.appendFileSync("pelicula.txt", Peliculas + "\n");
});

exports.get = (request, response, next) => {
    response.render('peliculas', { lista_peliculas: Peliculas.fetchAll() });
};


exports.getNuevaPelicula = (request, response, next) => {
    response.render('agregarPeliculas');
};

exports.postNuevaPelicula = (request, response, next) => {
    const nuevo_personaje = new Peliculas(request.body.nombre);
    nuevo_personaje.save();
    fs.appendFileSync("peliculas.txt", request.body.nombre + "\n");
    response.redirect("/peliculas");
};

exports.getpelicula = (request, response, next) => {
    response.render('peliculas', { lista_peliculas: Peliculas.fetchAll() });
};