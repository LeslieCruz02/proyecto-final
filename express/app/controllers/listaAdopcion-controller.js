
const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/mysql');

let listaAdopcion = (req, res) => {
  

   return res.status(200).json({
     idusuario:idusuario,
      "Status":"token ok"
    })

};

module.exports = {
  listaAdopcion
}
