const fs = require("fs");
const Peliculas = require('../models/peliculas');

exports.get = (request, response, next) => {
    Peliculas.fetchAll()
    .then(([rows, fieldData]) => {
        const pelicula = [];
        for (let peliculas of rows) {
            console.log(peliculas.Nombre);
            pelicula.push(peliculas.Nombre);
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
    nueva_pelicula.save()
    .then(() => {
        response.setHeader('Set-Cookie', ['ultima_pelicula=' + nueva_pelicula.nombre + '; HttpOnly']);
        response.redirect('/peliculas');
    }).catch(err => console.log(err));;
    
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