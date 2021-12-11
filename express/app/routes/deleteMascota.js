const express = require('express');
const deleteController = require('../controllers/delete-controller');
const router = express.Router();


router.delete('/', deleteController.mascota);


module.exports = router; 