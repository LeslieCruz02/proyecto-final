
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

module.exports = {
  addMascotas
}
