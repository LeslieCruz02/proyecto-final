const express = require('express');
const perfilPController = require('../controllers/perfilP-controller');
const validatorPerfilP = require('../middleware/perfilP-validator');
const authToken = require('../middleware/auth-token');
const router = express.Router();


router.get('/', authToken.njwtAuth, validatorPerfilP.validatorParams, validatorPerfilP.validator, perfilPController.perfilP);


module.exports = router; 