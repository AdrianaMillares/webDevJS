const peliculas = [
    "Slumdog millionaire",
    "How to lose a guy in 10 days",
    "Cementerio de elefantes",
];

exports.get = (request, response, next) => {
    response.render('peliculas', { lista_peliculas: peliculas });
};