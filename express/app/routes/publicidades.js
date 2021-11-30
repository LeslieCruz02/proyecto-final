const express = require('express');
const publicidadesController = require('../controllers/publicidades-controller');
const validatorPublicidades = require('../middleware/publicidades-validator');
const router = express.Router();


router.get('/', validatorPublicidades.validatorParams, validatorPublicidades.validator,publicidadesController.publicidades);


module.exports = router; 