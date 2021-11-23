
const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/mysql');

let perfilP = (req, res) => {
  
  if(!req.header('Authorization')){
    return res.status(403).send({auth:false, message:'No token provided'});
  }
  let sub= req.header('Authorization').split(' ')
  let token=sub[1];

  nJwt.verify(token,KEY.SIGNING_KEY,function(err, decoded){
    if(err){
      return res.status(403).send({auth: false,message:err});
    }
  return res.status(200).json({
      "Status":"token ok",
    })
  });
};
// let imagen = (req, res) => {
//   let img = req.query.imagen;
//   console.log(img);
//   return res.download("../images/" +img+".png");    
// }


module.exports = {
  perfilP,
  // imagen
}
