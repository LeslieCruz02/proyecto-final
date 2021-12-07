const express = require('express');
const minilistaController = require('../controllers/minilista-controller');
const validatorminilista = require('../middleware/minilista-validator');
const router = express.Router();


router.get('/', validatorminilista.validatorParams,  validatorminilista.validator, minilistaController.minilista);


module.exports = router; 