let db = require('../db/mysql');
const correo1=require('./correoAdopciones-controller')

function sleepTime(time) {
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, time)
  })
  
}

let adopciones = async(req, res) => {
  correo1.sendMail(req.body)
  db.adopciones(req.body)
  .then((result) => {
    return res.status(200).json({
      status: 'adopción enviada: ok',
      auth: true,
      documents: result,
    });
  })
  .catch((err) => {
    console.log(err);
  });
};

module.exports = {
  adopciones
}
