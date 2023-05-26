export default function (req, res) {
  let nodemailer = require("nodemailer");
  require('dotenv').config()

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.EMAIL,
    to: 'magarcia@marcoagarcia.com',
    subject: `Message From ${req.body.name}. Their email is: ${req.body.email}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`
   }
   res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  });

   transporter.sendMail(mailData, function (err, info) {
    if(err){
      return res.status(err.statusCode || 500);
    }
    else
      console.log(info)
  })

  return res.status(200);
}
