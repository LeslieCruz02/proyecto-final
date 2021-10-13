var mysql = require('mysql');
const CREDENTIALS = require('../config/mysql');
const bcrypt = require('bcryptjs');

function connection() {
    const connection = mysql.createConnection(CREDENTIALS);
    return connection;
}

function usuarios(data) {
    return new Promise((resolve, reject)=>{
      const mysqlConnection = connection();
      mysqlConnection.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL Server!");
      });
      
      let hashPass = bcrypt.hashSync(data.password, 8);
      data.password = hashPass;
      let insert = 'INSERT INTO usuarios(usuario, nombres, apellidos, correo, telefono, password) VALUES(?,?,?,?,?,?)';   
      let query = mysql.format(insert,[data.usuario, data.nombres, data.apellidos, data.correo, data.telefono, data.password]);
      
      mysqlConnection.query(query, (error, result) => {
        if (error) reject(error);
        mysqlConnection.end();
        resolve(result);
   
     });
    });
  }

function login(data){
    return new Promise((resolve,reject)=>{
      const mysqlConnection = connection();
      mysqlConnection.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL Server!");
      });
  
      let select = 'SELECT usuario, password FROM usuarios WHERE usuario=?';
      let query = mysql.format(select,[data.usuario]);
      mysqlConnection.query(query, (error, result) => {
      if(error) reject (error);
      mysqlConnection.end();
      resolve(result);
    });
    });
  }
  
 
  function adopciones(data) {
    return new Promise((resolve, reject)=>{
      const mysqlConnection = connection();
      mysqlConnection.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL Server!");
      });
      
      let insert = 'INSERT INTO adopciones (nombre, email, tipodoc, documento, observaciones) VALUES(?,?,?,?,?)';   
      let query = mysql.format(insert,[data.nombre, data.email, data.tipodoc, data.documento, data.observaciones]);
 
        mysqlConnection.query(query, (error, result) => {
        if (error) reject(error);
        mysqlConnection.end();
        resolve(result);
   
     });
    });
  }

  function addMascotas(data) {
    return new Promise((resolve, reject)=>{
      const mysqlConnection = connection();
      mysqlConnection.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL Server!");
      });
      
      let insert = 'INSERT INTO mascotas (nombre, tipoDeMascota, raza, edad, responsable, idestado, descripcion, fotos) VALUES(?,?,?,?,?,?,?,?)';   
      let query = mysql.format(insert,[data.nombre, data.tipoDeMascota, data.raza, data.edad, data.responsable, data.idestado, data.descripcion, data.fotos]);
      mysqlConnection.query(query, (error, result) => {
        if (error) reject(error);
        mysqlConnection.end();
        resolve(result);
      });
    });
  }
   

   function addPublicidad(data) {
   return new Promise((resolve, reject)=>{
     const mysqlConnection = connection();
       mysqlConnection.connect((err) => {
         if (err) throw err;
         console.log("Connected to MySQL Server!");
       });
      
       let insert = 'INSERT INTO publicidades (titulo, descripcion, imagenes) VALUES(?,?,?)';   
       let query = mysql.format(insert,[data.titulo, data.descripcion, data.imagenes]);
  
         mysqlConnection.query(query, (error, result) => {
         if (error) reject(error);
         mysqlConnection.end();
         resolve(result);
   
     });
   });
  }
  function contactenos(data) {
    return new Promise((resolve, reject)=>{
      const mysqlConnection = connection();
      mysqlConnection.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL Server!");
      });
      
      let insert = 'INSERT INTO contactenos (nombreC, correo, telefono, nombreO,  asunto, mensaje) VALUES(?,?,?,?,?,?)';   
      let query = mysql.format(insert,[data.nombreC, data.correo, data.telefono, data.nombreO,  data.asunto, data.mensaje]);
      
      mysqlConnection.query(query, (error, result) => {
        if (error) reject(error);
        mysqlConnection.end();
        resolve(result);
   
     });
    });
  }
module.exports = {
    connection,
    usuarios,
    login,
    adopciones,
    addMascotas,
    addPublicidad,
    contactenos
  /*  home,
    galeryPpal,
    perfilP,
    listaAdopcion,
    galeria*/
  }