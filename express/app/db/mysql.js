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
  
 
module.exports = {
    connection,
    usuarios,
    login
  }