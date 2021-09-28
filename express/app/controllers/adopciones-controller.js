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

module.exports = {
  adopciones
}
