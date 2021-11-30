
const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/mysql');

let dateAdmin = (req, res) => {
  db.consultaDateAdmin(idadmin)
 // devolver mensaje de biendevnida Json con el nombre propio del usuario
 .then((result) => {
  return res.status(200).json({
    admon: result
  });
  
})
.catch((err) => {
  console.log(err);
});
};



module.exports = {
  dateAdmin,
  // imagen
}
