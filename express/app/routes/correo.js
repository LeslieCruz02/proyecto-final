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
        to: "danielrozo11.49@gmail.com", //Se pueden pasar la lista de correos por medio de un array
        subject: "Te saluda Pets World",
        html: 
        `
        <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#3CACAE" bgcolor="#3CACAE" text-aling:"center">
        <tr height="250px">  
            <td bgcolor="" width="600px">
            <a href='https://postimg.cc/BLQXq4Rz' target='_blank'><img src='https://i.postimg.cc/BLQXq4Rz/Logo.png' border='0' alt='Logo' style="float:left"/></a>
                <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                <p  style="color: #fff; text-align:center">
                    <span style="color: #ffffff">Leslie</span> 
                    a Pets World
                </p>
            </td>
        </tr>
        <tr bgcolor="#fff">
            <td style="text-align:center">
                <p style="color: #000">¡El mundo de las mascotas a tu disposición!</p>
            </td>
        </tr>
        <tr bgcolor="#fff">
            <td style="text-align:center">
                <p>Para confirmar tu cuenta, ingresa al siguiente enlace:</p>
                <a href="http://localhost:10101/activacion?id=24"
                    target="_blank"
                >Confirmar Cuenta</a>
            </td>
        </tr>
        </table>
    
    `
    })
    console.log("Mensaje sent: %s",info.messageId);

}

exports.sendMail=()=> sendMail()