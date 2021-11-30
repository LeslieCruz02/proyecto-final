let db = require('../db/mysql');


let addMascotas = async(req,res)=>{

  db.addMascotas(req.body)
  .then((result) => {
    return res.status(200).json({
      status: "register ok",
      auth: true,
      documents: result,
    });
  })
  .catch((err) => {
    console.log(err);
  });

  /*let file = req['files'].img.mv("../../images/leslie.jpg", function(err) {
    console.log(err);
  });
        
  return res.status(201).json({"Status": "upload ok"}); */
}

 
module.exports = {
  addMascotas
}
