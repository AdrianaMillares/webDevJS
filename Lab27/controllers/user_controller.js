const { request, response } = require("express");

exports.getLogin = (request, response, next) =>{
    response.render('login');
    
};

exports.postLogin = (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.usuario = request.body.usuario; 
    response.redirect("/home");
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};