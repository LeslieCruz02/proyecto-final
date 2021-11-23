const express = require('express');
const loginAdminController = require('../controllers/loginAdmin-controller');
const validatorLoginAdmin = require('../middleware/loginAdmin-validator');
const router = express.Router();


router.post('/', validatorLoginAdmin.validatorParams, validatorLoginAdmin.validator, loginAdminController.loginAdmin);


module.exports = router; 