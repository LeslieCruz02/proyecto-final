const express = require('express');
const verificacionController = require('../controllers/verificacion-controller');
const validatorVerificacion = require('../middleware/verificacion-validator');
const router = express.Router();



router.post('/', verificacionController.verificacion);


module.exports = router; 