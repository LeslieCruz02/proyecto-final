const bcrypt = require('bcryptjs');
const nJwt = require('njwt');
const KEY= require('../config/keys');
let db = require('../db/mysql');

let paquete = async (req, res) => {
    
    console.log(req.body);
    return res.status(200).json({
      });
  };
  module.exports = {
    paquete
  }