const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/mysql');

function sleepTime(time) {
    return new Promise((resolve, reject)=>{
      setTimeout(resolve, time)
    })
    
  }

let changePassword = async(req,res)=>{
    let usuario = req.body.usuario;
    let correo = req.body.correo;
    let password1 = req.body.password1;
    let sleep = await sleepTime(1500);

    db.changePassword(req.body)
    .then((result) => {
  
      return res.status(200).json({
        status: "ok",
        auth: true,
        documents: result, 
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
    changePassword
  }
  