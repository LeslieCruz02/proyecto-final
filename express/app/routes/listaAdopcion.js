const express = require('express');
const listaAdopcionController = require('../controllers/listaAdopcion-controller');
const validatorListaAdopcion = require('../middleware/listaAdopcion-validator');
const authToken = require('../middleware/auth-token');
const router = express.Router();


router.get('/',authToken.njwtAuth, validatorListaAdopcion.validatorParams, validatorListaAdopcion.validator, listaAdopcionController.listaAdopcion);


module.exports = router; 