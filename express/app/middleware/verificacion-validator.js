const { check, validationResult } = require('express-validator');



validatorParams = [
          check('idmascota').isInt()
          
      ];
function validator(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          
          return res.status(422).json({ errors: errors.array() });
        }
        next();
    };


module.exports = {
  validatorParams,
  validator
}
