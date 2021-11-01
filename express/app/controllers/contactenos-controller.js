let db = require('../db/mysql');

function sleepTime(time) {
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, time)
  })
  
}

let contactenos = async(req, res) => {
  let nombreC = req.body.nombreC;
  let correo = req.body.correo;
  let nombreO = req.body.nombreO;
  let telefono= req.body.telefono;
  let asunto = req.body.asunto;
  let mensaje = req.body.mensaje;
  let sleep = await sleepTime(3000);

  db.contactenos(req.body)
  .then((result) => {
    return res.status(200).json({
      status: "Ok Enviado",
      auth: true,
      documents: result,
    });
  })
  .catch((err) => {
    console.log(err);
  });
};

/*  let insert = 'INSERT INTO contactenos (nombreC, correo, nombreO, telefono, asunto, mensaje) VALUES(?,?,?,?,?,?)';   
  let query = mysql.format(insert,[nombreC, correo, nombreO, telefono, asunto, mensaje]);
  connection.query(query, (err, result) => {
    if(err) throw err;
    connection.end();
    return res.status(200).json({
      "Status": "Petición enviada", 
    });
  });  
*/
module.exports = {
  contactenos
}
