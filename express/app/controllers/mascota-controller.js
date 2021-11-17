
let db = require('../db/mysql');

let mascota = (req, res) => {
  console.log(req.body);
    db.mascota(req.body)
    .then((result) => {
      return res.status(200).json({
        mascota: result
      });
      
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  mascota
}