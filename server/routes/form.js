const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PW
    }
  });

  const email = req.body.email || 'no-sender@email.com';
  const phone = req.body.phone || 'n/a';

  const mailOptions = {
    from: `"${req.body.name}", ${email}`, 
    to: process.env.EMAIL,
    replyTo: `${email}`,
    subject: 'Contact Form',
    html: `
    <h3>Contact Info</h3>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${email}</li>
    <li>Phone: ${phone}</li>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      res.sendStatus(200);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
});

module.exports = router;