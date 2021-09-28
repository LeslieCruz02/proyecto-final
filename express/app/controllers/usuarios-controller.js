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

module.exports = {
  usuarios
}
