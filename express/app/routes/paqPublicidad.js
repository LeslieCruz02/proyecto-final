const express = require('express');
const paqPublicidad = require('../controllers/paqPublicidad-controller');
const router = express.Router();


router.post('/',paqPublicidad.paquete);


module.exports = router; 