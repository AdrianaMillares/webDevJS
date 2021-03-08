const { response, request } = require("express");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));



const rutasPeliculas = require("./routes/peliculas");
const rutasOtros = require("./routes/otros");

app.use("/", rutasPeliculas);
app.use("/",rutasOtros);
app.use("/home", (request, response, next) => {
  let html = "<h1>Paola Adriana Millares Forno</h1>";
  html += "<h3>Las rutas son:</h3>";
  html +=
    "<p><ul><li>/home</li><li>/peliculas</li><li>/peliculas/nueva-pelicula</li><li>/series</li><li>/musica</li></ul></p>";
  response.send(html);
});

app.use((request, response, next) => {
  response.status(404);
  response.send("Error 404: Page not found <br> Pagina principal /home");
});




app.listen(3000);