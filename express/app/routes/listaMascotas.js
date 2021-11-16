const express = require('express');
const listaMascotasController = require('../controllers/listaMascotas-controller');
const validatorlistaMascotas = require('../middleware/listaMascotas-validator');
const router = express.Router();


router.get('/', validatorlistaMascotas.validatorParams, validatorlistaMascotas.validator, listaMascotasController.listaMascotas);


module.exports = router; 