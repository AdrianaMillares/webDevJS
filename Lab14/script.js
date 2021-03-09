const { response, request } = require("express");
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const rutasPeliculas = require("./routes/peliculas");
const rutasOtros = require("./routes/otros");
const rutasUsers = require("./routes/user");


app.use("/", rutasPeliculas);
app.use("/", rutasOtros);
app.use("/", rutasUsers);


app.get('/home', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use((request, response, next) => {
    response.status(404);
    response.send("Error 404: Page not found <br> Pagina principal /home");
});




app.listen(3000);