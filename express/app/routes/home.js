const express = require('express');
const homeController = require('../controllers/home-controller');
const validatorHome = require('../middleware/home-validator');
const router = express.Router();


router.get('/', validatorHome.validatorParams, validatorHome.validator, homeController.home);


module.exports = router; 