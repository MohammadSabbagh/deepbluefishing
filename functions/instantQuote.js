const formData = require('form-data');
const Mailgun = require('mailgun.js');

const { MAILGUN_API_KEY } = process.env;
const { MAILGUN_EMAIL } = process.env;

const COMPANY = 'Gurus'
const DOMAIN = 'gurus.ae';
const EMAIL_RECV = MAILGUN_EMAIL;

const config = {
  username: 'api',
  key: MAILGUN_API_KEY,
  url: 'https://api.eu.mailgun.net'
}

exports.handler = async function (event, context, callback) {

  const { message, senderEmail, senderMobile, senderName } = JSON.parse(event.body);

  const mailgun = new Mailgun(formData);
  const mg = mailgun.client(config);


  const msg = `
    Name: ${senderName}
    Mobile: ${senderMobile}
    Email: ${senderEmail}
    Description: ${message}

    --
    This e-mail was sent from ${DOMAIN}
    `;

  const mailObj = {
      from: `${COMPANY} <website@${DOMAIN}>`,
      to: [EMAIL_RECV],
      subject: `${COMPANY} - Instant Quote`,
      text: msg,
    };

  try {
    await mg.messages.create(DOMAIN, mailObj);
    console.log('sent successfuly');
    return {
      statusCode: 200,
      body: 'Message sent',
    };
  } catch (err) {
    console.log('error cant sent',err);
    return {
      statusCode: err.code,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
