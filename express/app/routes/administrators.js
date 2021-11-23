const express = require('express');
const administratorsController = require('../controllers/administrators-controller');
const validatorAdministrators = require('../middleware/administrators-validator');
const router = express.Router();


router.post('/', validatorAdministrators.validatorParams, validatorAdministrators.validator, administratorsController.administrator);


module.exports = router; 