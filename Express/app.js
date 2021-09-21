var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
var mysql = require('mysql');
const nJwt = require('njwt');
const SIGNING_KEY = 'oqLlmSRa5j3Y8YEYRsYrgO9ubTS2wv/ENuMCpm5HX555ef4aRPkceYru1lTuvccXm1dT73QuU3nqB5aRzq4nDVKpFSQs3oXvFSEEk2XNt2RPgMPTDWPU2h3Fblc5nDxLJHKRqsXDgncc/8aOXmGrMp2+SruMuz3NTFUf0YlyB+Fwb8z+hnK7JN4uszxO//72d4tcrs0xbuv4ke+2WXUN5ROu4/2nky0eJUP38/VH41jifprI0EHfrrt2aY3O9FvH5vFWT2NHmPJBz7ZVl6zoKB4ja1D03ZklOD/zJuYTNRUBo+2zaHyjmmvOFkvG3NiCtlguIM0tpgwV468eM2KKTQ==';

var app = express()
.use(cors({credentials: true, origin: 'http://localhost:4200'
}))
.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json());

app.post('/usuarios', function (req, res) {

  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '2003',
    database : 'ProyectoAdopciones'
  });
  
  connection.connect((err) => {
      if(err) throw err;
      console.log('Connected to MySQL Server!');
  });

  let usuario = req.body.usuario;
  let nombres = req.body.nombres;
  let apellidos = req.body.apellidos;
  let correo = req.body.correo;
  let telefono  = req.body.telefono;
  let password = req.body.password;
  let hashPass = bcrypt.hashSync(password,8);
  let insert = 'INSERT INTO usuarios(usuario, nombres, apellidos, correo, telefono, password) VALUES(?,?,?,?,?,?)';   
  let query = mysql.format(insert,[usuario, nombres, apellidos, correo, telefono, hashPass]);
  connection.query(query, (err, result) => {
    if(err) throw err;
    console.log('Insert usuario: ok');
    connection.end();
    return res.status(200).json({
      "Status": "ok registrado", 
      "reg": true,
      "usuario": usuario, 
      "nombres": nombres, 
      "apellidos": apellidos, 
      "correo": correo, 
      "telefono": telefono,
      "password": hashPass
    });
  });
});




app.post('/login', function (req, res) {
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '2003',
    database : 'ProyectoAdopciones'
  });
  
  connection.connect((err) => {
      if(err) throw err;
      //console.log('Connected to MySQL Server!');
  });

  let usuario = req.body.usuario;
  let password = req.body.password;

  let select = 'SELECT usuario, password FROM usuarios WHERE usuario=?';
  let query = mysql.format(select,[usuario]);
  connection.query(query, (err,result)=>{
    if(err) throw err;
    console.log("---------", result);
    if(!bcrypt.compareSync(password, result[0].password)){
      return res.status(401).send({statrs: 'authentication failed', auth:false}
      );
    }
    connection.end();
    let jwt = nJwt.create({ usuario: result[0].usuario }, SIGNING_KEY);
    jwt.setExpiration(new Date().getTime() + (2 * 60 * 1000));
    let token = jwt.compact();
    return res.status(200).json({
      "Status": "authentication ok",
      token: token
    });
  });
});


app.post('/addMascota', function (req, res) {

  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '2003',
    database : 'ProyectoAdopciones'
  });
  
  connection.connect((err) => {
      if(err) throw err;
      console.log('Connected to MySQL Server!');
  });

  let nombre = req.body.nombre;
  let tipoDeMascota = req.body.tipoDeMascota;
  let raza = req.body.raza;
  let edad = req.body.edad;
  let responsable = req.body.responsable;
  let idestado = req.body.idestado;
  let descripcion = req.body.descripcion;
  let fotos = req.body.fotos;
  let insert = 'INSERT INTO mascotas (nombre, tipoDeMascota, raza, edad, responsable, idestado, descripcion, fotos) VALUES(?,?,?,?,?,?,?,?)';   
  let query = mysql.format(insert,[nombre, tipoDeMascota, raza, edad, responsable, idestado, descripcion, fotos]);
  connection.query(query, (err, result) => {
    if(err) throw err;
    console.log('Insert Mascota: ok');
    connection.end();
    return res.status(200).json({
      "Status": "ok registrado", 
      "reg": true,
    });
  });
});

app.post('/contactenos', function (req, res) {

  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '2003',
    database : 'ProyectoAdopciones'
  });
  
  connection.connect((err) => {
      if(err) throw err;
      console.log('Connected to MySQL Server!');
  });

  let nombreC = req.body.nombreC;
  let correo = req.body.correo;
  let nombreO = req.body.nombreO;
  let telefono= req.body.telefono;
  let asunto = req.body.asunto;
  let mensaje = req.body.mensaje;
  let insert = 'INSERT INTO contactenos (nombreC, correo, nombreO, telefono, asunto, mensaje) VALUES(?,?,?,?,?,?)';   
  let query = mysql.format(insert,[nombreC, correo, nombreO, telefono, asunto, mensaje]);
  connection.query(query, (err, result) => {
    if(err) throw err;
    connection.end();
    return res.status(200).json({
      "Status": "Petición enviada", 
    });
  });  
});

app.post('/adopciones', function (req, res) {

  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '2003',
    database : 'ProyectoAdopciones'
  });
  
  connection.connect((err) => {
      if(err) throw err;
      console.log('Connected to MySQL Server!');
  });

  let nombre = req.body.nombre;
  let email = req.body.email;
  let tipodoc = req.body.tipodoc;
  let documento = req.body.documento;
  let observaciones = req.body.observaciones;
 
  let insert = 'INSERT INTO adopciones (nombre, email, tipodoc, documento, observaciones) VALUES(?,?,?,?,?)';   
  let query = mysql.format(insert,[nombre, email, tipodoc, documento, observaciones]);
  connection.query(query, (err, result) => {
    if(err) throw err;
    console.log('adopción enviada: ok');
    connection.end();
    return res.status(200).json({
      "Status": "ok enviada"
    });
  });
});


app.get('/home', function(req, res){
  if(!req.header('Authorization')){
    return res.status(403).send({auth:false, message:'No token provided'});
  }
  let sub= req.header('Authorization').split(' ')
  let token=sub[1];
  nJwt.verify(token,SIGNING_KEY,function(err, decoded){
    if(err){
      return res.status(403).send({auth: false,message:err});
    }
    return res.status(200).json({
      "Status":"token ok"
    })
  });
});


app.get('/galery-ppal', function (req, res) {
  
  if (!req.header('Authorization')) {
    return res.status(403).send({ auth: false, message: 'No token provided' });
  }
  let sub = req.header('Authorization').split(' ')
  let token = sub[1];
  nJwt.verify(token, SIGNING_KEY, function(err, decoded) {
    if (err) {
      return res.status(403).send({ auth: false, message: err });
    }

    //idUser = decoded.body.id;
    usuario = decoded.body.usuario;

    const connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '2003',
      database : 'ProyectoAdopciones'
    });
    
    connection.connect((err) => {
      if(err) throw err;
      //console.log('Connected to MySQL Server!');
    });

    let select = 'SELECT password FROM usuarios WHERE usuario=?';   
    let query = mysql.format(select,[usuario]);
    connection.query(query, (err, result) => {
      if(err) throw err;

      connection.end();

      return res.status(200).json({
        "Status": "Token ok",
        usuario: usuario,
        password: result[0].password
      });
    });
  });
});


app.get('/perfilP', function (req, res) {
  
  if (!req.header('Authorization')) {
    return res.status(403).send({ auth: false, message: 'No token provided' });
  }
  let sub = req.header('Authorization').split(' ')
  let token = sub[1];
  nJwt.verify(token, SIGNING_KEY, function(err, decoded) {
    if (err) {
      return res.status(403).send({ auth: false, message: err });
    }

    //idUser = decoded.body.id;
    usuario = decoded.body.usuario;

    const connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '2003',
      database : 'ProyectoAdopciones'
    });
    
    connection.connect((err) => {
      if(err) throw err;
      //console.log('Connected to MySQL Server!');
    });

    let select = 'SELECT password FROM usuarios WHERE usuario=?';   
    let query = mysql.format(select,[usuario]);
    connection.query(query, (err, result) => {
      if(err) throw err;

      connection.end();

      return res.status(200).json({
        "Status": "Token ok",
        usuario: usuario,
        password: result[0].password
      });
    });
  });
});


app.listen(10101, function () {
  console.log('Example app listening on port 10101!');
}); 

