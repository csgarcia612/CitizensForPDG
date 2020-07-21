const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');
const config = require('../config');

// let transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   auth: {
//     user: config.gmailUsername,
//     pass: config.gmailSecret
//   }
// });

let transporter = nodemailer.createTransport({
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
      from: 'pdg4dupage.gmail.com',
      // to: 'CitizensforPaulaDeaconGarcia@gmail.com',
      to: 'csgarcia.dev@gmail.com',
      subject: 'Message From Citizens For Paula Deacon Garcia Website',
      auth: {
        user: config.gmailUsername,
        refreshToken: config.gmailRefreshToken,
        accessToken: config.gmailAccessToken,
        expires: 3598,
      },
      text: `Message from ${contactName} at ${contactEmailAddress} and ${contactPhoneNumber}. The subject of the message is: ${contactSubject}. The message is as follows: ${contactMessage}`,
      // html: `
      //     <!doctype html>
      //     <html>
      //       <head>
      //         <title></title>
      //         <style>
      //           @media screen and (max-width: 600px) {
      //             .img-max {
      //               width: 100% !important;
      //               max-width: 100% !important;
      //               height: auto !important;
      //             }

      //             .max-width {
      //               max-width: 100% !important;
      //             }

      //             .mobile-wrapper {
      //               width: 85% !important;
      //               max-width: 85% !important;
      //             }

      //             .mobile-padding {
      //               padding-left: 5% !important;
      //               padding-right: 5% !important;
      //             }
      //           }

      //           body {
      //             background-color: #f6f6f6;
      //             height: 100%;
      //             padding: 0;
      //             width: 100%;
      //             margin: 0;
      //           }

      //           .table1 {
      //             border-collapse: collapse;
      //           }

      //           .td1 {
      //             background-color: #3b4a69;
      //             background-image: url('https://i.imgur.com/GOVUaph.jpg');
      //             background-size: cover;
      //             background-attachment: fixed;
      //             padding: 50px 15px 0 15px;
      //           }

      //           .table2 {
      //             max-width: 600px;
      //             border-collapse: collapse;
      //           }

      //           .td2 {
      //             padding: 0 0 25px 0;
      //           }

      //           .a {
      //             cursor: none;
      //           }

      //           .a > img {
      //             border: 0;
      //             height: auto;
      //             line-height: 100%;
      //             outline: none;
      //             text-decoration: none;
      //             box-shadow: 0px 0px 15px 5px #000000;
      //             display: block;
      //             border-radius: 10px;
      //           }

      //           .td3 {
      //             padding: 50px;
      //             font-family: Open Sans, Helvetica, Arial, sans-serif;
      //             border-radius: 15px;
      //             box-shadow: 0 0 15px #000000;
      //           }

      //           .td3 > p {
      //             color: #4D4D4D;
      //             font-size: 16px;
      //             line-height: 26px;
      //             margin: 0;
      //           }

      //           .td4 {
      //             padding: 25px 0;
      //             font-family: Open Sans, Helvetica, Arial, sans-serif;
      //             color: #0000FF;
      //           }

      //           .td4 > p {
      //             font-size: 32px;
      //             font-weight: bold;
      //             line-height: 35px;
      //             text-shadow: 3px 3px 0 #FFFFFF, 3px -3px 0 #FFFFFF, -3px 3px 0 #FFFFFF, -3px -3px 0 #FFFFFF, 3px 0px 0 #FFFFFF, 0px 3px 0 #FFFFFF, -3px 0px 0 #FFFFFF, 0px -3px 0 #FFFFFF, 3px 3px 0px rgba(0,0,255,0)
      //           }
      //         </style>
      //       </head>
      //       <body style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; !importantbackground-color: #f6f6f6; height: 100%; padding: 0; width: 100%; margin: 0;" bgcolor="#f6f6f6">

      //         <table class="table1" border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse;">
      //           <tr>
      //             <td class="td1" align="center" valign="top" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #3b4a69; background-image: url('https://i.imgur.com/GOVUaph.jpg'); background-size: cover; background-attachment: fixed; padding: 50px 15px 0 15px;" class="mobile-padding" bgcolor="#3b4a69" background="url('https://i.imgur.com/GOVUaph.jpg')">
      //               <!--[if (gte mso 9)|(IE)]>
      //               <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
      //               <tr>
      //                 <td align="center" valign="top" width="600">
      //                   <![endif]-->
      //                   <table class="table2" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; max-width: 600px; border-collapse: collapse;">
      //                     <tr>
      //                       <td class="td2" align="center" valign="top" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0 0 50px 0;">
      //                         <a href=#>
      //                           <img src="https://i.imgur.com/MwSJGpe.png" alt="Paula Deacon Garcia For DuPage Count, District 2" width="350" style="-ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; box-shadow: 0px 0px 15px 5px #000000; display: block; border-radius: 10px;">
      //                         </a>
      //                       </td>
      //                     </tr>
      //                     <tr>
      //                       <td class="td3" align="left" valign="top" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 50px; font-family: Open Sans, Helvetica, Arial, sans-serif; border-radius: 15px; box-shadow: 0 0 15px #000000;" bgcolor="#f6f6f6">
      //                         <p style="color: #4D4D4D; font-size: 16px; line-height: 26px; margin: 0;">

      //                               Dear Citizens For Paula Deacon Garcia,<br><br>

      //                               ${contactMessage}<br><br>

      //                               Sincerely,<br>
      //                               ${contactName}<br>
      //                               ${contactEmailAddress}<br>
      //                               ${contactPhoneNumber}
      //                         </p>
      //                       </td>
      //                     </tr>
      //                     <tr>
      //                       <td class="td4" align="center" valign="top" style="-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 25px 0; font-family: Open Sans, Helvetica, Arial, sans-serif; color: #0000FF;">
      //                         <p style="font-size: 32px; font-weight: bold; line-height: 35px; text-shadow: 3px 3px 0 #FFFFFF, 3px -3px 0 #FFFFFF, -3px 3px 0 #FFFFFF, -3px -3px 0 #FFFFFF, 3px 0px 0 #FFFFFF, 0px 3px 0 #FFFFFF, -3px 0px 0 #FFFFFF, 0px -3px 0 #FFFFFF, 3px 3px 0px rgba(0,0,255,0)">
      //                           #BuildaBetterDuPage
      //                         </p>
      //                       </td>
      //                     </tr>
      //         </table>
      //       <!--[if (gte mso 9)|(IE)]>
      //                       </td>
      //                     </tr>
      //         </table>
      //       <![endif]-->
      //               </td>
      //           </tr>
      //         </table>
      //       </body>
      //     </html>
      // `
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
