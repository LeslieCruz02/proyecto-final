let db = require('../db/mysql');

function sleepTime(time) {
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, time)
  })
  
}

let adopciones = async(req, res) => {
 
  let nombre = req.body.nombre;
  let email = req.body.email;
  let tipodoc = req.body.tipodoc;
  let documento = req.body.documento;
  let observaciones = req.body.observaciones;
  let sleep = await sleepTime(3000);

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
