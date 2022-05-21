const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');
const config = require('../config');

let transporter = null;
let senderEmail = null;

if (process.env.NODE_ENV === 'production') {
  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      clientId: config.gmailClientId,
      clientSecret: config.gmailClientSecret,
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log('*** Error with connection to Gmail: ', error);
    } else {
      console.log('Server connection to Gmail is ready to take messages');
    }
  });

  senderEmail = 'pdg4dupage@gmail.com';
} else if (process.env.NODE_ENV != 'production') {
  transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: config.etherealClientId,
      pass: config.etherealClientSecret,
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log('*** Error with connection to Ethereal Email: ', error);
    } else {
      console.log(
        'Server connection to Ethereal Email is ready to take messages'
      );
    }
  });

  senderEmail = 'smtp.ethereal.email';
}

module.exports = {
  sendEmail: (req, res, next) => {
    // console.log(req.body);

    const {
      contactName,
      contactEmailAddress,
      contactPhoneNumber,
      contactSubject,
      contactMessage,
    } = req.body;

    const mailOptions = {
      from: { senderEmail },
      to: 'CitizensforPaulaDeaconGarcia@gmail.com',
      subject: 'Message From Citizens For Paula Deacon Garcia Website',
      auth: {
        user: config.gmailUsername,
        refreshToken: config.gmailRefreshToken,
        accessToken: config.gmailAccessToken,
        expires: 3598,
      },
      // Remove the auth object when working in developer mode
      text: `Message from ${contactName} at ${contactEmailAddress} and ${contactPhoneNumber}. The subject of the message is: Message From Citizens For Paula Deacon Garcia Website. The message is as follows: ${contactMessage}`,
      html: `<!doctype html>
      <html>
          <head>
              <meta charset="utf-8">
              <title>New Email From PDG4DuPage Contact Page</title>
              <style>
                  body {
                    -webkit-text-size-adjust: 100%; 
                    -ms-text-size-adjust: 100%;
                    background-color: #f6f6f6;
                    height: 100%;
                    padding: 0;
                    width: 100%;
                    margin: 0;
                  }
                  .outerTable {
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse;
                  }
                  .outerTd {
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    background-color: #3b4a69;
                    background-image: url("https://i.imgur.com/GOVUaph.jpg");
                    background-size: cover;
                    background-attachment: fixed;
                    padding: 50px 15px 0px 15px;
                  }
                  .innerTable {
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    max-width: 600px;
                    border-collapse: collapse;
                  }
                  .logoTd {
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    padding: 0 0 50px 0;
                  }
                  .logoImg {
                    border: 0;
                    height: auto;
                    line-height: 100%;
                    outline: none;
                    text-decoration: none;
                    box-shadow: 0px 0px 15px 5px #000000;
                    display: block;
                    border-radius: 10px;
                    border-style: solid;
                    border-color: rgba(0,0,0,0.5);
                    border-width: 2.5px;
                  }
                  .messageTd {
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    padding: 50px;
                    font-family: Open Sans, Helelvetica, Arial, sans-serif;
                    border-radius: 15px;
                  }
                  .message {
                    color: #4d4d4d;
                    font-size: 16px;
                    line-height: 26px;
                    margin: 0;
                  }
                  .footerTd {
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    padding: 25px 0;
                    font-family: Open Sans, Helvetica, Arial, sans-serif;
                    color: #0000ff;
                  }
                  .footer {
                    padding: 10px 0px;
                    font-size: 32px;
                    font-weight: bold;
                    line-height: 35px;
                    text-shadow: 3px 3px 0 #ffffff, 3px -3px 0 #ffffff, -3px 3px 0 #ffffff, -3px -3px 0 #ffffff, 3px 0px 0 #ffffff, 0px 3px 0 #ffffff, -3px 0px 0 #ffffff, 0px -3px 0 #ffffff, 3px 3px 0 rgba(0,0,255,0);
                    background-color: #f6f6f6;
                    border-radius: 10px;
                    border-style: solid;
                    border-color: rgba(0,0,0,0.5);
                    border-width: 2.5px;
                  }
              </style>
          </head>
          <body style:"-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #f6f6f6; height: 100%; padding: 0; width: 100%; margin: 0;">
              <table class="outerTable" border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
                  <tr class="outerTr">
                      <td class="outerTd" align="center" valign="top" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #3b4a69; background-image: url("https://i.imgur.com/GOVUaph.jpg"); background-size: cover; background-attachment: fixed; padding: 50px 15px 0 15px;">
                          <table class="innerTable" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; max-width: 600px; border-collapse: collapse;">
                              <tr class="logoTr">
                                  <td class="logoTd" align="center" valign="top" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0 0 50px 0;">
                                      <a class="logoLink" href="#">
                                          <img class="logoImg" src="https://i.imgur.com/MwSJGpe.png" alt="Paula Deacon Garcia For DuPage County, District 2" width="350" style="border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; box-shadow: 0px 0px 15px 5px #000000; display: block; border-radius: 10px; border-style: solid; border-color: rgba(0,0,0,0.5); border-width: 2.5px;"/>
                                      </a>
                                  </td>
                              </tr>
                              <tr class="messageTr">
                                  <td class="messageTd" align="left" valign="top" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 50px; font-family: Open Sans, Helelvetica, Arial, sans-serif; border-radius: 15px; border-style: solid; border-color: rgba(0,0,0,0.5); border-width: 2.5px; box-shadow: 0 0 15px #000000; background-color: #f6f6f6;">
                                      <p class="message" style="color: #4d4d4d; font-size: 16px; line-height: 26px; margin: 0;">
                                          Dear Citizens For Paula Deacon Garcia,
                                          <br />
                                          <br />
                                          ${contactMessage}
                                          <br />
                                          <br />
                                          Sincerely,<br />
                                          ${contactName}<br />
                                          ${contactEmailAddress}<br />
                                          ${contactPhoneNumber}
                                      </p>
                                  </td>
                              </tr>
                              <tr class="footerTr">
                                  <td class="footerTd" align="center" valign="top" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 5px 0; font-family: Open Sans, Helvetica, Arial, sans-serif; color: #0000ff;">
                                      <p class="footer" style="padding: 10px 0px; font-size: 32px; font-weight: bold; line-height: 35px; text-shadow: 3px 3px 0 #ffffff, 3px -3px 0 #ffffff, -3px 3px 0 #ffffff, -3px -3px 0 #ffffff, 3px 0px 0 #ffffff, 0px 3px 0 #ffffff, -3px 0px 0 #ffffff, 0px -3px 0 #ffffff, 3px 3px 0 rgba(0,0,255,0); background-color: #f6f6f6; border-radius: 10px; border-style: solid; border-color: rgba(0,0,0,0.5); border-width: 2.5px;">
                                          #BuildaBetterDuPage
                                      </p>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </body>
      </html>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log('Error occurred with sending email', error);

        res.status(500).send('Email Failed', error);
      } else {
        console.log('Email Sent Successfully -- Message Info', info);

        res.status(200).send('Email Sent');
      }
    });
  },
};
