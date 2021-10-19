// let db = require('../db/mysql');
// const {request, response} = require('express');
// const nodeMailer = require('nodemailer');

// const envioCorreo = (req=request,resp=response)=>{
//     let body = req.body;

//     let config = nodeMailer.createTransport({
//         host:'smtp.gmail.com',
//         post:587,
//         auth:{
//             user:'info.petsworldaxm@gmail.com',
//             pass:'tupassword.1'
//         }
//     });
//     const opciones ={
//         from : 'Programación',
//         Subject: body.asunto,
//         to: body.email,
//         text:body.mensaje
//     };

//     config.sendMail(opciones,function (error, result) {
//         if (error) return resp.json({ok:false,msg:error});
//         return resp.json({
//             ok: true,
//             msg:result
//         })
//     })
// }

// module.exports ={
//     envioCorreo
// }