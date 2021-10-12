let db = require('../db/mysql');

let contactenos = (req, res) => {
  let connection = db.contactenosconnection()
  connection.connect((err) => {
    if(err) throw err;
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
}
module.exports = {
  contactenos
}
