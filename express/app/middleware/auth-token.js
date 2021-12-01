const nJwt = require('njwt');
const config = require('../config/keys');

let njwtAuth = (req, res, next) => {
  if (!req.header('Authorization')) {
    return res.status(403).send({ auth: false, message: 'No token provided' });
  }
  let sub = req.header('Authorization').split(' ')
  let token = sub[1];
  nJwt.verify(token, config.SIGNING_KEY, function(err, decoded) {
    if (err) {
      return res.status(400).send({ auth: false, message: err });
    }
    usuario = decoded.body.usuario;
    idusuario = decoded.body.idusuario;
    idadmin = decoded.body.idadmin
    
    next();
  });
};

module.exports = {
  njwtAuth
};

