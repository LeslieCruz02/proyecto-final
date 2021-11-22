const express = require('express');
const imagenesController = require('../controllers/images-controller');
const router = express.Router();


router.get('/', imagenesController.image);


module.exports = router; 