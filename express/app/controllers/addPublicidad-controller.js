let db = require('../db/mysql');

function sleepTime(time) {
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, time)
  })
  
}

let addPublicidad = async(req, res) => {
  let sleep = await sleepTime(3000);

    db.addPublicidad(req.body)
  .then((result) => {
    return res.status(200).json({
      status: 'publicada',
      auth: true,
      documents: result,
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
module.exports = {
  addPublicidad
}
