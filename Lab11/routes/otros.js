const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.use('/Musica', (request, response, next) => {
    let html = '<h1>Musica</h1>';
    html += '<ul><li>Yegua - Los babasonicos</li>';
    html += '<li>Cuando pase el temblor - Soda estereo</li>';
    html += '<li>Scrawny - Wallows</li>';
    html += '<li>Flowers in your hair -  the lumineneers</li>';
    html += '</ul>';
    response.send(html);
});

router.use( '/Series', (request, response, next) => {
    let html = '<h1>Series</h1>';
    html += "<ul><li>The 100</li>";
    html += "<li>How I met your mother</li>";
    html += "<li>Glee</li>";
    html += "<li>Hannah Montana </li>";
    html += "</ul>";
    response.send(html);
});

module.exports = router;