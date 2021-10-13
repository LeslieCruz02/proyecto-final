const express = require('express');
const adopcionesController = require('../controllers/adopciones-controller');
const validatorAdopciones = require('../middleware/adopciones-validator');
const router = express.Router();


router.post('/', validatorAdopciones.validatorParams, validatorAdopciones.validator, adopcionesController.adopciones);


module.exports = router; 