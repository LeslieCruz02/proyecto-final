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

module.exports = {
  galeria
}
