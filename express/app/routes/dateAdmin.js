const express = require('express');
const dateController = require('../controllers/dateAdmin-controller');
const validatorDate = require('../middleware/dateAdmin-validator');
const authToken = require('../middleware/auth-token');
const router = express.Router();


router.get('/', authToken.njwtAuth, validatorDate.validatorParams, validatorDate.validator, dateController.dateAdmin);


module.exports = router; 