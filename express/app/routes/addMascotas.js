const express = require('express');
const addMascotasController = require('../controllers/addMascotas-controller');
const validatorAddMascotas = require('../middleware/addMascotas-validator');
const router = express.Router();


router.post('/', validatorAddMascotas.validatorParams, validatorAddMascotas.validator, addMascotasController.addMascotas);


module.exports = router; 