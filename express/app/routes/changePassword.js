const express = require('express');
const changePassword = require('../controllers/changePassword-controller');
// const validatorUsuarios = require('../middleware/usuarios-validator');
const router = express.Router();


router.put('/',changePassword.changePassword)


module.exports = router; 