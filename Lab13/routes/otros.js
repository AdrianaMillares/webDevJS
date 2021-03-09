const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const musicaController = require('../controllers/musica_controller');
const seriesController = require('../controllers/series_controller');

router.use(bodyParser.urlencoded({ extended: false }));

router.use('/Musica', (musicaController.get));

router.use( '/Series', (seriesController.get));

module.exports = router;