let db = require('../db/mysql');


let addMascotas = async(req,res)=>{
  let nombre = req.body.nombre;
  let tipoDeMascota = req.body.tipoDeMascota;
  let raza = req.body.raza;
  let edad = req.body.edad;
  let responsable = req.body.responsable;
  let idestado = req.body.idestado;
  let descripcion = req.body.descripcion;
  let fotos = req.body.fotos;

  db.usuarios(req.body)
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
