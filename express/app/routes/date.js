const express = require('express');
const dateController = require('../controllers/date-controller');
const validatorDate = require('../middleware/date-validator');
const authToken = require('../middleware/auth-token');
const router = express.Router();


router.get('/', authToken.njwtAuth, validatorDate.validatorParams, validatorDate.validator, dateController.date);


module.exports = router; 