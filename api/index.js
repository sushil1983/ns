const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:false}))



app.post('/api',(res ,req)=>{

    console.log('welcome to the server with data ' )
    console.log(res.body)

    let testAccount =  nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'sushilpathariya@gmail.com', // generated ethereal user
          pass: 'meragmail$1983' // generated ethereal password
        }
      });
    
      // send mail with defined transport object
      let info =  transporter.sendMail({
        from: '"Narmada Site" <sushilpathariya@gmail.com>', // sender address
        to: "sushilpathariya@narmadasolution.co.in", // list of receivers
        subject: "New Enquiry ", // Subject line
        text: '${res.body}', // plain text body
        html: '${res.body}'// html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
   
})
const PORT =  4000;

app.listen(PORT, () =>
    {
console.log(`server listining on port ${PORT}`)

    })