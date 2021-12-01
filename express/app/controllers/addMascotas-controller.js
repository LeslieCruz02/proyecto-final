let db = require('../db/mysql');


let addMascotas = (req,res)=>{
  console.log(req.body);

  let file = req['files'].fotos.mv("./images/"+req.body.nombre+".jpg", function(err) {
    console.log(err);
  });
fotos= req.body.nombre
  db.addMascotas(req.body,fotos)
  .then((result) => {
    return res.status(200).json({
      status: "register ok",
      auth: true,
      documents: result,
    });
  })
  .catch((err) => {
    console.log(err);
  });
}

 
module.exports = {
  addMascotas
}
