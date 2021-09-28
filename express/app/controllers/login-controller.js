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
    let jwt = nJwt.create({ usuario: result[0].usuario }, SIGNING_KEY);
    jwt.setExpiration(new Date().getTime() + (2 * 60 * 1000));
    let token = jwt.compact();
    return res.status(200).json({
      "Status": "authentication ok",
      token: token
    });
  });

module.exports = {
  login
}
