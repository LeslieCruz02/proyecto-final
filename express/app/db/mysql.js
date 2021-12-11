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
      let insert = 'INSERT INTO usuarios(usuario, nombres, apellidos, correo, telefono, password, estadoCuenta) VALUES(?,?,?,?,?,?,?)';   
      let query = mysql.format(insert,[data.usuario, data.nombres, data.apellidos, data.correo, data.telefono, data.password, "inactivo"]);
      
      mysqlConnection.query(query, (error, result) => {
        if (error) reject(error);
        mysqlConnection.end();
        resolve(result);
   
     });
    });
  }
 
  function administrator(data) {
    return new Promise((resolve, reject)=>{
      const mysqlConnection = connection();
      mysqlConnection.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL Server!");
      });ss;
      let insert = 'INSERT INTO admon(usuario, nombres, apellidos, rol, correo, telefono, password, estadoCuenta, foto) VALUES(?,?,?,?,?,?,?,?,?)';   
      let query = mysql.format(insert,[data.usuario, data.nombres, data.apellidos, data.rol, data.correo, data.telefono, data.password, "activo", null]);
      
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
  
      let select = 'SELECT idusuario, usuario, password FROM usuarios WHERE usuario=? AND estadoCuenta = ?';
      let query = mysql.format(select,[data.usuario, "activo"]);
      mysqlConnection.query(query, (error, result) => {
      if(error) reject (error);
      console.log(error);
      mysqlConnection.end();
      resolve(result);
      console.log(result);
    });
    });
  }

function changePassword(data) {
//   return new Promise((resolve, reject) => {
//     const mysqlConnection = connection();
//     mysqlConnection.connect((err)=>{
//       if(err) throw err;
//       console.log("Connected to MySQL Server!");
//     });
//     let hashPass1 = bcrypt.hashSync(data.password1, 8);
//     data.password1 = hashPass1;
//     let update = 'UPDATE usuarios set password=password1 WHERE usuario=? AND correo=?'
//     let query = mysql.format(update,[data.password1]);
//     mysqlConnection.query(query, (error, result) => {
//       if (error) reject (error);
//       console.log(error);
//       mysqlConnection.end();
//       resolve(result)
//       console.log(result);
//     });
//   });
}

  function loginAdmin(data){
    return new Promise((resolve,reject)=>{
      const mysqlConnection = connection();
      mysqlConnection.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL Server!");
      });
  
      let select = 'SELECT idadmin, usuario,  password FROM admon WHERE usuario=? AND estadoCuenta = ?';
      let query = mysql.format(select,[data.usuario, "activo"]);
      mysqlConnection.query(query, (error, result) => {
      if(error) reject (error);
      console.log(error);
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
      
      let insert = 'INSERT INTO adopciones (mascota, adoptante, nombre, email, tipodoc, documento, observaciones) VALUES(?,?,?,?,?,?,?)';   
      let query = mysql.format(insert,[data.idmascota,data.idusuario,data.nombre, data.email, data.tipodoc, data.documento, data.observaciones]);
 
        mysqlConnection.query(query, (error, result) => {
        if (error) reject(error);
        mysqlConnection.end();
        resolve(result);
   
     });
    });
  }

  function addMascotas(data,fotos) {
    return new Promise((resolve, reject)=>{
      const mysqlConnection = connection();
      mysqlConnection.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL Server!");
      });
      
      let insert = 'INSERT INTO mascotas (nombre, tipoDeMascota, raza, edad, responsable, idestado, descripcion, foto1) VALUES(?,?,?,?,?,?,?,?)';   
      let query = mysql.format(insert,[data.nombre, data.tipoDeMascota, data.raza, data.edad, data.responsable, data.idestado, data.descripcion, fotos]);
      mysqlConnection.query(query, (error, result) => {
        if (error) reject(error);
        mysqlConnection.end();
        resolve(result);
        console.log(result);
      });
    });
  }
   

   function addPublicidad(data, imagenes) {
   return new Promise((resolve, reject)=>{
     const mysqlConnection = connection();
       mysqlConnection.connect((err) => {
         if (err) throw err;
         console.log("Connected to MySQL Server!");
       });
      
       let insert = 'INSERT INTO publicidades (usuario,titulo, descripcion, imagenes, estado) VALUES(?,?,?,?,?)';   
       let query = mysql.format(insert,[data.idusuario, data.titulo, data.descripcion, imagenes, 1]);
  
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
      let date = new Date()
      let insert = 'INSERT INTO contactenos (nombreC, correo, telefono, apellido,  asunto, mensaje, date) VALUES(?,?,?,?,?,?,?)';   
      let query = mysql.format(insert,[data.nombreC, data.correo, data.telefono, data.apellido,  data.asunto, data.mensaje,  date]);
      
      mysqlConnection.query(query, (error, result) => {
        if (error) reject(error);
        mysqlConnection.end();
        resolve(result);
   
     });
    });
  }

  function verificar(correo) {
    return new Promise((resolve, reject)=>{
      const mysqlConnection = connection();
      mysqlConnection.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL Server!");
      });
      let select = `SELECT idusuario FROM usuarios WHERE correo = ?`;
      let query = mysql.format(select,[correo.correo]);
      console.log(query);
      mysqlConnection.query(query, (error, result) => {
        if (error) reject(error);
        mysqlConnection.end();
       
        resolve(result);
        let id = result[0].idusuario;
        activar(id);
     });
    });
  }
function activar(data){
  {
    return new Promise((resolve, reject)=>{
      const mysqlConnection = connection();
      mysqlConnection.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL Server!");
      });
      let update = `UPDATE usuarios SET estadoCuenta = "activo" WHERE idusuario = ?`;
      let query = mysql.format(update,[data]);
      console.log(query);
      mysqlConnection.query(query, (error, result) => {
        if (error) reject(error);
        mysqlConnection.end();
        resolve(result);
   
     });
    });
  }
}

function mascotas(){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });

    let select = 'SELECT * FROM mascotas WHERE idestado = ? ';
    let query = mysql.format(select,['1']);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}

function mascota(data){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });

    let select = 'SELECT * FROM mascotas WHERE idmascota = ? ';
    let query = mysql.format(select,[data.idmascota]);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}

function usuariosInfo(){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let select = 'SELECT * FROM usuarios';
    let query = mysql.format(select);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}

function mascotasInfo(){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let select = 'SELECT * FROM mascotas';
    let query = mysql.format(select);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}
function solicitudesInfo(){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let select = 'SELECT * FROM contactenos';
    let query = mysql.format(select);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}
function publicidadesInfo(){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let select = 'SELECT * FROM publicidades';
    let query = mysql.format(select);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}
function adopcionesInfo(){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let select = 'SELECT * FROM adopciones';
    let query = mysql.format(select);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}

function consultaUser(data){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let select = 'SELECT idusuario, nombres FROM usuarios WHERE idusuario =?';
    let query = mysql.format(select,[data]);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}

function consultaDate(data){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let select = 'SELECT *  FROM usuarios WHERE idusuario =?';
    let query = mysql.format(select,[data]);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}


function consultaDateAdmin(data){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let select = 'SELECT *  FROM admon WHERE idadmin =?';
    let query = mysql.format(select,[data]);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}
function dateMascotas(data){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let select = 'SELECT * FROM mascotas WHERE responsable =?';
    let query = mysql.format(select,[data]);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);

  });
  });
}
function publicidades(data){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let select = 'SELECT * FROM publicidades WHERE estado =?';
    let query = mysql.format(select,[1]);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
    console.log(data);
    console.log(result);
  });
  });
}

function deleteUser(id){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let DELETE = 'DELETE FROM usuarios WHERE idusuario = ?';
    let query = mysql.format(DELETE, id);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
    console.log(result);
  });
  });
}
function deleteMascota(id){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let DELETE = 'DELETE FROM mascota WHERE idmascotas =?';
    let query = mysql.format(DELETE,id);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
    console.log(result);
  });
  });
}
function deleteSolicitud(correo){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let DELETE = 'DELETE FROM contactenos WHERE correo =?';
    let query = mysql.format(DELETE,correo);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
    console.log(result);
  });
  });
}
function deletePublicidad(id){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let DELETE = 'DELETE FROM publicidades WHERE idPublicidad =?';
    let query = mysql.format(DELETE,id);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
    console.log(result);
  });
  });
}
function deleteAdopcion(id){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let DELETE = 'DELETE FROM adopciones WHERE idAdopcion =?';
    let query = mysql.format(DELETE,id);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
    console.log(data);
    console.log(result);
  });
  });
}

function minilista(){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });

    let select = 'SELECT * FROM mascotas WHERE idestado = ? ';
    let query = mysql.format(select,['2']);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
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
    contactenos,
    verificar, 
    activar,
    mascotas,
    mascota,
    administrator,
    loginAdmin,
    usuariosInfo,
    mascotasInfo,
    solicitudesInfo,
    publicidadesInfo,
    adopcionesInfo,
    consultaUser,
    consultaDate,
    dateMascotas,
    consultaDateAdmin,
    publicidades,
    deleteUser,
    deleteMascota,
    deletePublicidad,
    deleteSolicitud,
    deleteAdopcion,
    changePassword,
    minilista,
  /*  home,
    galeryPpal,
    perfilP,
    listaAdopcion,
    galeria*/
  }