const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/mysql');


function sleepTime(time) {
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, time)
  })
  
}

let login = async (req, res) => {

  let usuario = req.body.usuario;
  let password = req.body.password;
  let sleep = await sleepTime(3000);

  db.login(req.body)
  .then((result)=>{
    if (result == 0) {
      return res.status(401).send({ status: 'authentication failed', auth: false});
    };
    
    if (!bcrypt.compareSync(password, result[0].password)) {
      return res.status(401).send({ status: 'authentication failed', auth: false}
      );
    };
    
    let jwt = nJwt.create({usuario:usuario, idusuario: result[0].idusuario  },KEY.SIGNING_KEY);
    jwt.setExpiration(new Date().getTime() + (20* 60 * 1000));
    let cookieConfig = {
      domain: 'localhost', path: '/', secure: false,
      expires: new Date(Date.now() + 300000), httpOnly: true
    }
    let token = jwt.compact();
    return res.status(200).cookie('refreshtoken', token, cookieConfig).json({
      "Status": "authentication ok",
      token: token
    });
  })
  .catch((err) => {
    console.log(err);
  });
};

module.exports = {
  login
}
