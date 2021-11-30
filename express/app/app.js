const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bearerToken = require('express-bearer-token');
const cookieParser = require('cookie-parser');

const addMascotas = require('./routes/addMascotas'); 
const adopciones = require('./routes/adopciones'); 
const contactenos = require('./routes/contactenos'); 
const galeria = require('./routes/galeria'); 
const galeryPpal = require('./routes/galeryPpal'); 
const home = require('./routes/home'); 
const login = require('./routes/login'); 
const perfilP = require('./routes/perfilP'); 
const usuarios = require('./routes/usuarios'); 
const listaAdopcion = require('./routes/listaAdopcion');
const addPublicidad = require('./routes/addPublicidad');
const publicidad = require('./routes/publicidad');
const emails = require('./routes/emails');
const verificacion = require('./routes/verificacion');
const listaMascotas = require('./routes/listaMascotas');
const mascota = require('./routes/mascota');
const administrators = require ('./routes/administrators');
const loginAdmin = require ('./routes/loginAdmin');
const images = require('./routes/images');
const usuariosInfo = require('./routes/usuariosInfo');
const solicitudesInfo = require('./routes/solicitudesInfo');
const publicidadesInfo = require('./routes/publicidadesInfo');
const adopcionesInfo = require('./routes/adopcionesInfo');
const mascotasInfo = require('./routes/mascotasInfo');
const date = require('./routes/date');
const dateMascotas = require('./routes/dateMascotas');
const publicidades = require('./routes/publicidades');
const app = express()
  .use(cors({credentials: true, origin: 'http://localhost:4200'}))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use(cookieParser())
  .use(bearerToken());

app.use('/addMascotas', addMascotas);
app.use('/adopciones', adopciones);
app.use('/contactenos', contactenos);
app.use('/galeria', galeria);
app.use('/galeryPpal', galeryPpal);
app.use('/home', home);
app.use('/listaAdopcion', listaAdopcion);
app.use('/login', login);
app.use('/perfilP', perfilP);
app.use('/usuarios', usuarios);
app.use('/addPublicidad', addPublicidad);
app.use('/publicidad', publicidad);
app.use('/emails', emails);
app.use('/verificacion', verificacion);
app.set('view engine', 'ejs');
app.use('/listaMascotas', listaMascotas);
app.use('/mascota', mascota);
app.use('/administrators', administrators);
app.use('/loginAdmin', loginAdmin);
app.use('/images', images);
app.use('/usuariosInfo', usuariosInfo);
app.use('/solicitudesInfo', solicitudesInfo);
app.use('/publicidadesInfo', publicidadesInfo);
app.use('/adopcionesInfo', adopcionesInfo);
app.use('/mascotasInfo', mascotasInfo);
app.use('/date', date);
app.use('/dateMascotas', dateMascotas);
app.use('/publicidades', publicidades);
module.exports = app;

