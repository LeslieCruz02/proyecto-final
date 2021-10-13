const express = require('express');
const usuariosController = require('../controllers/usuarios-controller');
const validatorUsuarios = require('../middleware/usuarios-validator');
const router = express.Router();


router.post('/', validatorUsuarios.validatorParams, validatorUsuarios.validator, usuariosController.usuarios);


module.exports = router; 