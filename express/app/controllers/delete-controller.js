let db = require('../db/mysql');


let usuarios = async(req, res) => {

  console.log(req.body);
  db.deleteUser(req.body)
  .then((result) => {

    return res.status(200).json({
      status: "delete ok" 
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
let mascota = async(req, res) => {


  db.deleteMascota(req.body)
  .then((result) => {

    return res.status(200).json({
      status: "delete ok",
      auth: true,
      documents: result, 
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
let solicitud = async(req, res) => {


  db.deleteSolicitud(req.body)
  .then((result) => {

    return res.status(200).json({
      status: "delete ok",
      auth: true,
      documents: result, 
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
let adopcion = async(req, res) => {


  db.deleteAdopcion(req.body)
  .then((result) => {

    return res.status(200).json({
      status: "delete ok",
      auth: true,
      documents: result, 
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
let publicidad = async(req, res) => {


  db.deletePublicidad(req.body)
  .then((result) => {

    return res.status(200).json({
      status: "delete ok",
      auth: true,
      documents: result, 
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
module.exports = {
  usuarios,
  mascota,
  solicitud,
  publicidad,
  adopcion
}
