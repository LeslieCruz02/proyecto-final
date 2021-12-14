let db = require('../db/mysql');


let usuarios = async(req, res) => {

  console.log(req.query.id);
  let id= req.query.id
  db.deleteUser(id)
  .then((result) => {

    return res.status(200).json({
      status: "delete ok",
      documents: result
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
let mascotas = async(req, res) => {
  console.log(req.query.id);
  let id= req.query.id

  db.deleteMascota(id)
  .then((result) => {

    return res.status(200).json({
      status: "delete ok",
      documents: result, 
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
let solicitud = async(req, res) => {
  console.log(req.query.correo);
  let correo= req.query.correo

  db.deleteSolicitud(correo)
  .then((result) => {

    return res.status(200).json({
      status: "delete ok",
      documents: result, 
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
let adopcion = async(req, res) => {
  console.log(req.query.id);
  let id= req.query.id

  db.deleteAdopcion(id)
  .then((result) => {

    return res.status(200).json({
      status: "delete ok",
      documents: result, 
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
let publicidad = async(req, res) => {
  console.log(req.query.id);
  let id= req.query.id

  db.deletePublicidad(id)
  .then((result) => {

    return res.status(200).json({
      status: "delete ok",
      documents: result, 
    });
  })
  .catch((err) => {
    console.log(err);
  });
};
module.exports = {
  usuarios,
  mascotas,
  solicitud,
  publicidad,
  adopcion
}
