const express = require('express');
const deleteController = require('../controllers/delete-controller');
const validatordelete = require('../middleware/delete-validator');
const router = express.Router();


router.delete('/', validatordelete.validatorParams, validatordelete.validator, deleteController.usuarios);


module.exports = router; 