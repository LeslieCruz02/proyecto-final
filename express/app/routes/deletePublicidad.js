const express = require('express');
const deleteController = require('../controllers/delete-controller');
const router = express.Router();


router.post('/', deleteController.publicidad);


module.exports = router; 