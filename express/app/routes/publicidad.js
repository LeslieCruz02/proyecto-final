const express = require('express');
const publicidadController = require('../controllers/publicidad-controller');
const validatorPublicidad = require('../middleware/publicidad-validator');
const router = express.Router();


router.get('/', validatorPublicidad.validatorParams, validatorPublicidad.validator, publicidadController.publicidad);


module.exports = router; 