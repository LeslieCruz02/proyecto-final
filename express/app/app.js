const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bearerToken = require('express-bearer-token');
const cookieParser = require('cookie-parser');

const auth = require('./routes/auth'); 
const addMascotas = require('./routes/addMascotas'); 
const adopciones = require('./routes/adopciones'); 
const contactenos = require('./routes/contactenos'); 
const galeria = require('./routes/galeria'); 
const galeryPpal = require('./routes/galeryPpal'); 
const home = require('./routes/home'); 
const login = require('./routes/login'); 
const perfilP = require('./routes/perfilP'); 
const usuarios = require('./routes/usuarios'); 

const app = express()
  .use(cors({credentials: true, origin: 'http://localhost:4200'}))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use(cookieParser())
  .use(bearerToken());

  auth
app.use('/auth', auth);
app.use('/addMascotas', addMascotas);
app.use('/adopciones', adopciones);
app.use('/contactenos', contactenos);
app.use('/galeria', galeria);
app.use('/galeryPpal', galeryPpal);
app.use('/home', home);
app.use('/login', login);
app.use('/perfilP', perfilP);
app.use('/usuarios', usuarios);


module.exports = app;
