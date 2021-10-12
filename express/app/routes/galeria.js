const express = require('express');
const galeriaController = require('../controllers/galeria-controller');
const validatorGaleria = require('../middleware/galeria-validator');
const router = express.Router();


router.get('/', validatorGaleria.validatorParams, validatorGaleria.validator, galeriaController.galeria);


module.exports = router; 