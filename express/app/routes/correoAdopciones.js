const express = require('express');
const correoAdopciones  = require('../controllers/correoAdopciones-controller');
const router = express.Router();

router.post('/', correoAdopciones.sendMail);

module.exports = router; 
