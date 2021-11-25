const express = require('express');
const homeController = require('../controllers/home-controller');
const validatorHome = require('../middleware/home-validator');
const authToken = require('../middleware/auth-token');
const router = express.Router();


router.get('/',authToken.njwtAuth, validatorHome.validatorParams, validatorHome.validator, homeController.home);


module.exports = router; 