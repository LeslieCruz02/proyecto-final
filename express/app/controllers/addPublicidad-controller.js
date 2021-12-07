let db = require('../db/mysql');

function sleepTime(time) {
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, time)
  })
  
}

let addPublicidad = async(req, res) => {
  console.log(req.body) 
  let sleep = await sleepTime(3000);
  let file = req['files'].imagenes.mv("./images/"+req.body.titulo+".jpg", function(err) {
    console.log(err);
  });
imagenes= req.body.titulo

    db.addPublicidad(req.body, imagenes)
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
