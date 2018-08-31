const apiKey = process.env.MG_API_KEY;
const DOMAIN = process.env.DOMAIN_NAME;
const mailgun = require('mailgun-js')({ apiKey: apiKey, domain: DOMAIN });

const contactForm = (req) => {
  let name = null;
  const email = req.email || 'no-sender@email.com';
  const phone = req.phone_number || 'n/a';
  const message = req.message || 'n/a';
  let selectedOptions = [];
  let subject = '';
  let html = '';

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
    subject = 'Contact Form';
    html = `
      <h3>Contact Info</h3>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>Phone: ${phone}</li>
      <h3>Message</h3>
      <p>${message}</p>
    `;
  } else if (req.page === 'Training Service Profile') {
    subject = 'Contact Form';
    html = `
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
      `;
  }
  
  let data = {
    from: `${name} ${email}`,
    to: 'contact@keyup.services',
    subject: `${subject}`,
    html: `${html}
      `
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
};

module.exports = contactForm;