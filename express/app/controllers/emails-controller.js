const nodemailer = require('nodemailer');
const createTrans = () =>{
    const transport = nodemailer.createTransport({
        service: 'gmail',
        hostname: 'smtp.gmail.com',
        port:456,
        secure:true,
        auth:{
            user: 'petsworld2508@gmail.com',
            pass:'esjkkdldizfrkwbu'
        }
    });
    return transport;
}

const sendEmail= async (body) =>{
    console.log(body.nombreC, body.correo);
    const transporter = createTrans()
    const info = await transporter.sendMail({
        from: "petsworld2508@gmail.com",
        to: body.correo, //Se pueden pasar la lista de correos por medio de un array
        subject: "Hemos recibido tú petición",
        html: `
        <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#3CACAE" bgcolor="#3CACAE" text-aling:"center">
            <tr height="250px">  
                <td bgcolor="" width="600px">
                <a href='https://postimg.cc/BLQXq4Rz' target='_blank'><img src='https://i.postimg.cc/BLQXq4Rz/Logo.png' border='0' alt='Logo' style="float:left"/></a>
                    <h1 style="color: #fff; text-align:center">Hemos recibido tu petición</h1>
                    <p  style="color: #fff; text-align:center">
                        <span style="color: #000000">${body.nombreC}</span> 
                        pronto nos contactaremos contigo!
                    </p>
                </td>
            </tr>
            </table>
            `,
                /* attachments:[
                {filename:'PETSWORLD.png', path: './PETSWORLD.png'}
                ]*/
                        
    })
    console.log("Mensaje sent: %s",info.messageId);

}

module.exports ={
    sendEmail
}
