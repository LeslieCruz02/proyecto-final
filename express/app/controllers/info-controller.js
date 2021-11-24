const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/mysql');

let usuarios = async (req, res) => {
  
    db.usuariosInfo()
    .then((result) => {
      return res.status(200).json({
        usuarios: result
      });
      
    })
    .catch((err) => {
      console.log(err);
    });
};
let mascotas = async (req, res) => {
  
  db.mascotasInfo()
  .then((result) => {
    return res.status(200).json({
      mascotas: result
    });
    
  })
  .catch((err) => {
    console.log(err);
  });
};


let solicitudes = async (req, res) => {
  
  db.solicitudesInfo()
  .then((result) => {
    return res.status(200).json({
      solicitudes: result
    });
    
  })
  .catch((err) => {
    console.log(err);
  });
};


let publicidades = async (req, res) => {
  
  db.publicidadesInfo()
  .then((result) => {
    return res.status(200).json({
      publicidades: result
    });
    
  })
  .catch((err) => {
    console.log(err);
  });
};


let adopciones = async (req, res) => {
  
  db.adopcionesInfo()
  .then((result) => {
    return res.status(200).json({
      adopciones: result
    });
    
  })
  .catch((err) => {
    console.log(err);
  });
};




module.exports = {
  usuarios,
  mascotas,
  solicitudes,
  publicidades,
  adopciones
}