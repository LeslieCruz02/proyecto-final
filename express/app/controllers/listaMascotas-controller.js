const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/mysql');

let listaMascotas = async (req, res) => {
  
    db.mascotas()
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
  listaMascotas
}