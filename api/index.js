const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}))


app.post('/api',(res ,req)=>{let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465 ,
      secure: false, // true for 465, false for other ports
      auth: {
        user: sushilpathariya@gmail.com, // generated ethereal user
        pass: meragmail$1983 // generated ethereal password
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"site" <foo@example.com>', // sender address
      to: "sushilpathariya@narmadasolution.co.in", // list of receivers
      subject: "New Enquiry message, // Subject line
      text: "${response.body}", // plain text body
      html: "${response}" // html body
    });
  
    console.log("Message sent: %s", info.messageId);
   
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
   
})
const PORT= process.env.PORT|| 3001

app.listen(PORT, () =>
    {
console.log(`server listining on port ${PORT}`)

    })