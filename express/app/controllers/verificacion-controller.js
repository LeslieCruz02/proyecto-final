
const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/mysql');


const verificacion =   async(req, res) => {
  console.log(req.body);
  
  db.verificar (req.body)
.then((result) => {
  return res.status(200).json({
    status: "ok cuenta activada",
    auth: true,
    documents: result,
    
    
  });
})
.catch((err) => {
  console.log(err);
});
};

module.exports = {
  verificacion
}
