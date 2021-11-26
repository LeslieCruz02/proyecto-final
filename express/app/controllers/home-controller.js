
const bcrypt = require('bcryptjs');
const { Result } = require('express-validator');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/mysql');

let home = (req, res) => {


  db.consultaUser(idusuario)
 // devolver mensaje de biendevnida Json con el nombre propio del usuario
 .then((result) => {
  return res.status(200).json({
    nombres:  result[0].nombres
  });
  
})
.catch((err) => {
  console.log(err);
});
};


module.exports = {
  home
}
