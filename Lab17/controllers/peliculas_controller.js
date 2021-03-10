const fs = require("fs");
const Peliculas = require('../models/peliculas');

exports.get = (request, response, next) => {
    Peliculas.fetchAll()
    .then(([rows, fieldData]) => {
        const pelicula = [];
        for (let peliculas of rows) {
            console.log(peliculas);
            pelicula.push(peliculas);
        }
        response.render('peliculas', { lista_peliculas: pelicula});
    })
        .catch(err => {
            console.log(err);
        });
};


exports.getNuevaPelicula = (request, response, next) => {
    response.render('agregarPeliculas');
};

exports.postNuevaPelicula = (request, response, next) => {
    const nueva_pelicula = new Peliculas(request.body.nombre);
    nueva_pelicula.save();
    fs.appendFileSync("peliculas.txt", request.body.nombre + "\n");
    response.setHeader('Set-Cookie', 'ultima_pelicula=' +nueva_pelicula.nombre+ '; HttpOnly');
    response.redirect("/peliculas");
};

exports.getpelicula = (request, response, next) => {
    Peliculas.fetchAll()
        .then(([rows, fieldData]) => {
            const pelicula = [];
            for (let peliculas of rows) {
                console.log(peliculas.Nombre);
                pelicula.push(peliculas.Nombre);
            }
            response.render('peliculas', { lista_peliculas: pelicula });
        })
        .catch(err => {
            console.log(err);
        });
    console.log(request.cookies);
};