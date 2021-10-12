let db = require('../db/mysql');

let galeryPpal = (req, res) => {
  let connection = db.galeryPpalconnection()
  connection.connect((err) => {
    if(err) throw err;
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
}
module.exports = {
  galeryPpal
}
