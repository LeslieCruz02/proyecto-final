const express = require('express');
const emailController  = require('../controllers/emails-controller');
const validatorEmail = require('../middleware/emails-validator');
const router = express.Router();

router.post('/', emailController.sendEmail);

module.exports = router; 