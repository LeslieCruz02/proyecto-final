
let db = require('../db/mysql');

let publicidades = (req, res) => {
  console.log(req.body);
    db.publicidades(req.body)
    .then((result) => {
      return res.status(200).json({
       publicidades: result
      });
      
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  publicidades
}