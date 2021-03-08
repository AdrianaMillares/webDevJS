const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.use('/Musica', (request, response, next) => {
    response.render('musica');
});

router.use( '/Series', (request, response, next) => {
    response.render('series');
});

module.exports = router;