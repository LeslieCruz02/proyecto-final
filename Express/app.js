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
    password : '10918268',
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
    let jwt = nJwt.create({ id: result[0].id }, SIGNING_KEY);
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
    password : '10918268',
    database : 'ProyectoAdopciones'
  });
  
  connection.connect((err) => {
      if(err) throw err;
      console.log('Connected to MySQL Server!');
  });

  let nombre = req.body.nombre;
  let tipoDeMascota = req.body.tipoDeMascota;
  let raza = req.body.Raza;
  let fundacion = req.body.fundacion;
  let edad = req.body.edad;
  let estado = req.body.estado;
  let descripcion = req.body.descripcion;
  let fotos = req.body.fotos;
  products.products.push({"nombre": nombre, "tipoDeMascota": tipoDeMascota, "raza": raza, "fundacion": fundacion, "edad": edad, "estado": estado, "descripcion":descripcion, "fotos": fotos});
  connection.end();
  return res.status(200).json({"Status": "Producto agregado"});
});

app.post('/contactenos', function (req, res) {

  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '10918268',
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
  let mensaje = req.body.mensaje;
  products.products.push({"nombreC": nombreC, "correo": correo, "nombreO": nombreO,"telefono":telefono , "mensaje": mensaje});
  connection.end();
  return res.status(200).json({"Status": "Petición enviada"});
});

app.post('/estado', function (req, res) {

  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '10918268',
    database : 'ProyectoAdopciones'
  });
  
  connection.connect((err) => {
      if(err) throw err;
      console.log('Connected to MySQL Server!');
  });


  products.products.push({"estado": estado});
  connection.end();
  return res.status(200).json({"Status": "el estado actual es",  estado});
});

app.listen(10101, function () {
  console.log('Example app listening on port 10101!');
}); 