const express = require('express');
const perfilPController = require('../controllers/perfilP-controller');
const validatorPerfilP = require('../middleware/perfilP-validator');
const router = express.Router();


router.get('/', validatorPerfilP.validatorParams, validatorPerfilP.validator, perfilPController.perfilP);


module.exports = router; 