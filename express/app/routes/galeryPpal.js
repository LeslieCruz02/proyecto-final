const express = require('express');
const galeryPpalController = require('../controllers/galeryPpal-controller');
const validatorGaleryPpal = require('../middleware/galeryPpal-validator');
const router = express.Router();


router.get('/', validatorGaleryPpal.validatorParams, validatorGaleryPpal.validator, galeryPpalController.galeryPpal);


module.exports = router; 