const nodeMailer = require('nodemailer');

const sendEmail = (req, res) =>{
    console.log("hhhhhhhhhhhhhhhh");
    let transport = nodeMailer.createTransport({
        service: 'gmail',
        hostname: 'smtp.gmail.com',
        port:456,
        secure:true,
        auth:{
            user: 'info.petsworldaxm@gmail.com',
            pass:'lhuigugbmypswpbp'
        }
    });

    let mensaje = "Profesor muy buenas tardes, ya logramos enviar mensajes muchas gracias!";

    const opciones ={
        from: 'info.petsworldaxm@gmail.com',
        to: "angaritagerman@hotmail.com",
        subjet: "Registro Exitoso",
        text: mensaje
    };

    transport.sendMail(opciones,function(error,result){
        if (error) return res.json({ok:false, msg:error});
     
        return res.json({
         ok: true,
         msg:result
     });
    });
};

module.exports ={
    sendEmail
}

/*.https.onCall(async (data) => {

    const transporter = nodemailer.createTransport({
      host: 'mail.sfwinterbach.com',
      port: 465,
      secure: true,
      auth: {
        user: functions.config().mailer.email,
        pass: functions.config().mailer.password
      }
    });

    const fromName = 'Kontakt';
    const fromEmail = 'kontaktformular@sfwinterbach.com';
    const to = data.to;
    const text = data.text;

    const mailOptions = {
      from: fromName + ' <' + fromEmail + '>',
      to: to,
      subject: 'Anfrage auf ' + transporter.host,
      text: text,
      html: text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    console.log(info);
    return info;
  });*/