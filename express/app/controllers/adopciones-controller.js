let db = require('../db/mysql');

function sleepTime(time) {
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, time)
  })
  
}

let adopciones = async(req, res) => {

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
