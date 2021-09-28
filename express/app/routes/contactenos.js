const express = require('express');
const contactenosController = require('../controllers/contactenos-controller');
const validatorContactenos = require('../middleware/contactenos-validator');
const router = express.Router();


router.post('/', validatorContactenos.validatorParams, validatorContactenos.validator, contactenosController.contactenos);


module.exports = router; 