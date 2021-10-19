const nodemailer = require('nodemailer');

const createTrans = () =>{
    const transport = nodemailer.createTransport({
        service: 'gmail',
        hostname: 'smtp.gmail.com',
        port:456,
        secure:true,
        auth:{
            user: 'info.petsworldaxm@gmail.com',
            pass:'lhuigugbmypswpbp'
        }
    });
    return transport;
}


const sendMail= async () =>{
    const transporter = createTrans()
    const info = await transporter.sendMail({
        from: "info.petsworldaxm@gmail.com",
        to: ["fikyhr@gmail.com","danielrozo11.49@gmail.com"], //Se pueden pasar la lista de correos por medio de un array
        subject: "Te saluda Pets World",
        html: "<b>EL envio fue exitoso, lo logramos</b>"
    })
    console.log("Mensaje sent: %s",info.messageId);

}

exports.sendMail=()=> sendMail()