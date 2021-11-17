const express = require('express');
const mascotaController = require('../controllers/mascota-controller');
const validatorMascota = require('../middleware/mascota-validator');
const router = express.Router();


router.post('/', validatorMascota.validatorParams, validatorMascota.validator, mascotaController.mascota);


module.exports = router; 