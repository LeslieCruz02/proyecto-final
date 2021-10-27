const express = require('express');
const correoRegistro  = require('../controllers/correRegistro-controller');
const validatorCorreoRegistro = require('../middleware/correoRegistro-validator');
const router = express.Router();

router.post('/', correoRegistro.sendMail);

module.exports = router; 
