const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/mysql');

let minilista = async (req, res) => {
  
    db.minilista()
    .then((result) => {
      return res.status(200).json({
       minilista: result.minilista
      });
      
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  minilista
}