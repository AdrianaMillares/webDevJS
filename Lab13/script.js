const { response, request } = require("express");
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const rutasPeliculas = require("./routes/peliculas");
const rutasOtros = require("./routes/otros");

app.use("/", rutasPeliculas);
app.use("/", rutasOtros);

app.get('/home', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use((request, response, next) => {
    response.status(404);
    response.send("Error 404: Page not found <br> Pagina principal /home");
});




app.listen(3000);