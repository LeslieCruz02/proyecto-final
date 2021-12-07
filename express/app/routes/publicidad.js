const express = require('express');
const publicidadController = require('../controllers/publicidad-controller');
const validatorPublicidad = require('../middleware/publicidad-validator');
const authToken = require('../middleware/auth-token');
const router = express.Router();


router.get('/', authToken.njwtAuth, validatorPublicidad.validatorParams, validatorPublicidad.validator, publicidadController.publicidad);


module.exports = router; 