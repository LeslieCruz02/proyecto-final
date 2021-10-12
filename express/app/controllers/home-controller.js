let db = require('../db/mysql');

let home = (req, res) => {
  let connection = db.homeconnection()
  connection.connect((err) => {
    if(err) throw err;
  });
  let sub= req.header('Authorization').split(' ')
  let token=sub[1];
  nJwt.verify(token,SIGNING_KEY,function(err, decoded){
    if(err){
      return res.status(403).send({auth: false,message:err});
    }
    return res.status(200).json({
      "Status":"token ok"
    })
  });

}
module.exports = {
  home
}
