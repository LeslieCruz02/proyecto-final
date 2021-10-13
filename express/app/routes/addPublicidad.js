const express = require('express');
const addPublicidadController = require('../controllers/addPublicidad-controller');
const validatorAddPublicidad = require('../middleware/addPublicidad-validator');
const router = express.Router();


router.post('/', validatorAddPublicidad.validatorParams, validatorAddPublicidad.validator, addPublicidadController.addPublicidad);


module.exports = router; 