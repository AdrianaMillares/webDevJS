const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const musicaController = require('../controllers/musica_controller');
const seriesController = require('../controllers/series_controller');
const usersController = require('../controllers/user_controller');

router.use(bodyParser.urlencoded({ extended: false }));

router.use('/musica', (musicaController.get));

router.use('/Series', (seriesController.get));

router.get('/login', (usersController.getLogin));
router.post('/login', (usersController.postLogin));

router.get('/logout', (usersController.getLogin));
router.post('/logout', (usersController.postLogin));

module.exports = router;