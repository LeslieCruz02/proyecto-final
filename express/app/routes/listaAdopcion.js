const express = require('express');
const listaAdopcionController = require('../controllers/listaAdopcion-controller');
const validatorListaAdopcion = require('../middleware/listaAdopcion-validator');
const router = express.Router();


router.get('/', validatorListaAdopcion.validatorParams, validatorListaAdopcion.validator, listaAdopcionController.listaAdopcion);


module.exports = router; 