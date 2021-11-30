const express = require('express');
const dateController = require('../controllers/date-controller');
const authToken = require('../middleware/auth-token');
const router = express.Router();


router.get('/', authToken.njwtAuth,  dateController.mascotas);


module.exports = router; 