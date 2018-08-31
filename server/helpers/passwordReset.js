const crypto = require('crypto');
const { knex } = require('../../database/db');
const apiKey = process.env.MG_API_KEY;
const DOMAIN = process.env.DOMAIN_NAME;
const mailgun = require('mailgun-js')({ apiKey: apiKey, domain: DOMAIN });

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
    
    let url = `https://keyup.services/password/reset/${token}`;

    let data = {
      from: 'KeyUp Austin <contact@keyup.services>',
      to: `${updateUser.first_name}, ${updateUser.email}`,
      subject: 'KeyUp Password Reset',
      html: `<html>
        <p>Hello ${updateUser.first_name},</p>
        <p>You are receiving this email because you (or someone else) have requested a password reset.</p>
        <p>Please click the link below or paste it into your browser to set a new password.</p>
        <p><a href=${url}>${url}</a></p>
        <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
        <p>- The KeyUp Team</p>
        </html>
      `
    };

    mailgun.messages().send(data, function (error, body) {
      console.log(body);
    });

    return { 
      id: updateUser.id,
      email: updateUser.email
     }
  } catch(err) {
    console.error(err);
  }
}

module.exports = { sendPasswordEmail };