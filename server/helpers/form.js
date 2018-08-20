const express = require('express');
const nodemailer = require('nodemailer');

const contactForm = (req) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PW
    }
  });

  let name = null;
  const email = req.email || 'no-sender@email.com';
  const phone = req.phone_number || 'n/a';
  const message = req.message || 'n/a';
  let selectedOptions = [];
  let mailOptions = {
    from: `"${name}", ${email}`,
    to: process.env.EMAIL,
    replyTo: `${email}`
  };

  if (req.last_name !== null) {
    name = `${req.first_name} ${req.last_name}`;
  } else {
    name = req.first_name;
  }

  if (req.financial_aid === true) {
    selectedOptions.push('Financial Aid');
  }

  if (req.app_process === true) {
    selectedOptions.push('Application Process');
  }

  if (req.talk_to_grad === true) {
    selectedOptions.push('Talk to a Grad');
  }

  if (req.talk_to_working === true) {
    selectedOptions.push(`Talk to a working ${req.career}`);
  }

  if (req.other === true) {
    selectedOptions.push('Other');
  } 

  if (req.page === 'Homepage') {
    mailOptions.subject = 'Contact Form',
    mailOptions.html = `
      <h3>Contact Info</h3>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>Phone: ${phone}</li>
      <h3>Message</h3>
      <p>${message}</p>
    `
  } else if (req.page === 'Training Service Profile') {
      mailOptions.subject = 'Contact Form',
      mailOptions.html = `
        <h3>Contact Info</h3>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
        <h3>Form Info</h3>
        <li>Career: ${req.career}</li>
        <li>Training Service: ${req.training_service}</li>
        <li>Topics: ${selectedOptions.join(', ')}</li>
        <h3>Message</h3>
        <p>${message}</p>
      `
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      res.sendStatus(200);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
};

module.exports = contactForm;