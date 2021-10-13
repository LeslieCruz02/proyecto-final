let db = require('../db/mysql');


function sleepTime(time) {
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, time)
  })
  
}

let home = async(req, res) => {
  let connection = db.homeconnection()
  let sleep = await sleepTime(3000);

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
