const nodemailer = require('nodemailer');
const createTrans = () =>{
    const transport = nodemailer.createTransport({
        service: 'gmail',
        hostname: 'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user: 'abglesliecruz@gmail.com',
            pass:'hsejamiarsieoprs'
        }
    });
    return transport;
}

const sendMail= async (body) =>{
    console.log(body.nombre, body.email);
    const transporter = createTrans()
    const info = await transporter.sendMail({
        from: "abglesliecruz@gmail.com",
        to: body.email, //Se pueden pasar la lista de correos por medio de un array
        subject: "Pets World te da la bienvenida",
        html: `
        <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#3CACAE" bgcolor="#3CACAE" text-aling:"center">
        <tr height="250px">  
            <td bgcolor="" width="600px">
            <a href='https://postimg.cc/BLQXq4Rz' target='_blank'><img src='https://i.postimg.cc/BLQXq4Rz/Logo.png' border='0' alt='Logo' style="float:left"/></a>
                <h1 style="color: #fff; text-align:center">Hemos recibido tu solicitud de adopcion</h1>
                <p  style="color: #fff; text-align:center">
                    <span style="color: #000000">${body.nombre}</span> 
                    pronto nos contactaremos contigo para continuar el proceso de adopción para el nuevo miembro de tu familia!
                </p>
                <p  style="color: #fff; text-align:center">
                    
                    Gracias por preferir Pets World para adoptar!
                </p>
            </td>
        </tr>
        </table>
        `,
        // attachments:[
        //     {filename:''attachment.txt', 'content': data'}
        // ]

        
    })
    console.log("Mensaje sent: %s",info.messageId);

}

module.exports ={sendMail}