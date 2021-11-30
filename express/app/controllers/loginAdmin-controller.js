
const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/mysql');


function sleepTime(time) {
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, time)
  })
  
}

let loginAdmin = async (req, res) => {
  let usuario = req.body.usuario;
  let password = req.body.password;
  let sleep = await sleepTime(3000);

  db.loginAdmin(req.body)
  .then((result)=>{
    if (result == 0) {
      return res.status(401).send({ status: 'authentication failed', auth: false});
    };
    
    if (!bcrypt.compareSync(password, result[0].password)) {
      return res.status(401).send({ status: 'authentication failed', auth: false}
      );
    };
    
    let jwt = nJwt.create({usuario:usuario, idadmin: result[0].idadmin  },KEY.SIGNING_KEY);
    jwt.setExpiration(new Date().getTime() + (2* 60 * 1000));
    let token = jwt.compact();

    return res.status(200).json({
      "Status": "authentication ok",
      token: token
    });
  })
  .catch((err) => {
    console.log(err);
  });
};

module.exports = {
  loginAdmin
}
