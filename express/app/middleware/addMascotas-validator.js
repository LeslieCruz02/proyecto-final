const { check, validationResult } = require('express-validator');


validatorParams = [
          check('nombre').isString(),
          check('tipoDeMascota').isString(),
          check('raza').isString(),
          check('edad').isAlphanumeric(),
          check('responsable').isString(),
          check('idestado').isString(),
          check('descripcion').isString(),
          check('fotos').isString(),
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
