const { check, validationResult } = require('express-validator');


validatorParams = [
        check('nombreC').isString(),
        check('correo').isEmail(),
        check('nombreO').isString(),
        check('telefono').isInt(),
        check('asunto').isString(),
        check('mensaje').isString()
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
