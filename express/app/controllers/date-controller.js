
const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/mysql');

let date = (req, res) => {
  db.consultaDate(idusuario)
 // devolver mensaje de biendevnida Json con el nombre propio del usuario
 .then((result) => {
  return res.status(200).json({
    usuarios: result
  });
  
})
.catch((err) => {
  console.log(err);
});
};

let mascotas = (req, res) => {
console.log("estoy llegando");
  db.dateMascotas(idusuario)
 // devolver mensaje de biendevnida Json con el nombre propio del usuario
 .then((result) => {
  return res.status(200).json({
    mascotas: result
  });
  
})
.catch((err) => {
  console.log(err);
});
};

module.exports = {
  date,
  mascotas,
  // imagen
}
