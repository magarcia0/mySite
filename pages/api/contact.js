export default async function (req, res) {
  let nodemailer = require("nodemailer");
  require("dotenv").config();

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
    to: "magarcia@marcoagarcia.com",
    subject: `Message From ${req.body.name}. Their email is: ${req.body.email}`,
    text: req.body.message,
    html: `<div>${req.body.message}</div>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(info);
        res.sendStatus(200);
      }
    });
  });

  /*
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      return res.status(err.statusCode || 500);
    } else {
      //console.log("info:", info);
      res.sendStatus(200);
    }
  });
  */
  return res.end();
}
