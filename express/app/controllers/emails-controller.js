const nodeMailer = require('nodemailer');

const sendEmail = (req, res) =>{
    
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

    
    const opciones ={
        from: 'info.petsworldaxm@gmail.com',
        to: "abglesliecruz@gmail.com",
        subject: "Petición enviada",
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#3CACAE" bgcolor="#3CACAE" text-aling:"center">
            <tr height="250px">  
                <td bgcolor="" width="600px">
                <a href='https://postimg.cc/BLQXq4Rz' target='_blank'><img src='https://i.postimg.cc/BLQXq4Rz/Logo.png' border='0' alt='Logo' style="float:left"/></a>
                    <h1 style="color: #fff; text-align:center">Hemos recibido tu petición</h1>
                    <p  style="color: #fff; text-align:center">
                        <span style="color: #000000">Leslie</span> 
                        pronto nos contactaremos contigo!
                    </p>
                </td>
            </tr>
            </table>
        `,
        attachments:[
            {filename:'PETSWORLD.png', path: './PETSWORLD.png'}
        ]
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
