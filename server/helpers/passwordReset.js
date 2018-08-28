const nodemailer = require('nodemailer');
const crypto = require('crypto');
const { knex } = require('../../database/db');

const sendPasswordEmail =  async (id, email) => {
  try {
    const token = await crypto.randomBytes(40).toString('hex');
    const expiration = Date.now() + 3600000;
    const updateUser = (await knex('users')
      .where({ id })
      .update({
        resetPasswordToken: token,
        resetPasswordExpiry: expiration
      })
      .returning(['id', 'email', 'first_name', 'resetPasswordToken']))[0];

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PW
      }
    });

    const url = `localhost:1337/password/reset/${token}`;
    let mailOptions = {
      from: `"KeyUp Austin", ${process.env.EMAIL}`,
      to: `"${updateUser.first_name}", ${updateUser.email}`,
      replyTo: `${process.env.EMAIL}`,
      subject: 'KeyUp Password Reset',
      html: `
        <p>Hello ${updateUser.first_name},</p>
        <p>You are receiving this email because you (or someone else) have requested a password reset.</p>
        <p>Please click the link below or paste it into your browser to set a new password.</p>
        <p><a href=${url}>${url}</a></p>
        <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
        <p>- The KeyUp Team</p>
      `
    };
    transporter.sendMail(mailOptions);

    return { 
      id: updateUser.id,
      email: updateUser.email
     }
  } catch(err) {
    console.error(err);
  }
}

module.exports = { sendPasswordEmail };