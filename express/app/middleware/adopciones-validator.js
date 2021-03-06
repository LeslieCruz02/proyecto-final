const { check, validationResult } = require('express-validator');


validatorParams = [
        check('nombre').isString(),
        check('email').isEmail(),
        check('tipodoc').isString(),
        check('documento').isInt(),
        check('observaciones').isString()
      ];

      
function validator(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          console.log(errors);
          return res.status(422).json({ errors: errors.array() });
        }
        next();
    };


module.exports = {
  validatorParams,
  validator
}
