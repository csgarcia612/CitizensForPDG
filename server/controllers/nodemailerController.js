const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_SECRET
  }
});

module.exports = {
  sendEmail: (req, res, next) => {
    console.log(req.body);
    const {
      contactName,
      contactEmailAddress,
      contactPhoneNumber,
      contactSubject,
      contactMessage
    } = req.body;
    const mailOptions = {
      from: 'csgarcia.portfolio.gmail.com',
      to: 'csgarcia.dev@gmail.com',
      subject: 'Message From Citizens For Paula Deacon Garcia Website',
      text: `Message from ${contactName} at ${contactEmailAddress} and ${contactPhoneNumber}. The subject of the message is: ${contactSubject}. The message is as follows: ${contactMessage}`,
      html: `
        <!-- THIS EMAIL WAS BUILT AND TESTED WITH LITMUS http://litmus.com -->
        <!-- IT WAS RELEASED UNDER THE MIT LICENSE https://opensource.org/licenses/MIT -->
        <!doctype html>
        <html>
        <head>
        <title></title>
        <style type="text/css">
        /* CLIENT-SPECIFIC STYLES */
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; }
        
        /* RESET STYLES */
        img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
        table { border-collapse: collapse !important; }
        body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
        
        /* iOS BLUE LINKS */
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
        
        /* MOBILE STYLES */
        @media screen and (max-width: 600px) {
        .img-max {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
        }
        
        .max-width {
          max-width: 100% !important;
        }
        
        .mobile-wrapper {
          width: 85% !important;
          max-width: 85% !important;
        }
        
        .mobile-padding {
          padding-left: 5% !important;
          padding-right: 5% !important;
        }
        }
        
        /* ANDROID CENTER FIX */
        div[style*="margin: 16px 0;"] { margin: 0 !important; }
        </style>
        </head>
        <body style="margin: 0 !important; padding: 0; !important background-color: #f6f6f6;" bgcolor="#f6f6f6">
        
        <!-- HIDDEN PREHEADER TEXT -->
        <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Open Sans, Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
          Lorem ipsum dolor que ist
        </div>
        
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
              <td align="center" valign="top" width="100%" background="bg.jpg" bgcolor="#3b4a69" style="background: #3b4a69 url('https://imgur.com/GOVUaph'); background-size: cover; background-attachment: fixed; padding: 50px 15px 0 15px;" class="mobile-padding">
                  <!--[if (gte mso 9)|(IE)]>
                  <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                  <tr>
                  <td align="center" valign="top" width="600">
                  <![endif]-->
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                      <tr>
                          <td align="center" valign="top" style="padding: 0 0 50px 0;">
                              <img src='https://imgur.com/MwSJGpe' width="150" height="100" border="0" style="display: block;">
                          </td>
                      </tr>
                      <tr>
                          <td align="left" valign="top" style="padding: 50px; font-family: Open Sans, Helvetica, Arial, sans-serif; border-radius: 3px; box-shadow: 0 0 5px rgba(0,0,0,.5);" bgcolor="#f6f6f6">
                              <p style="color: #4D4D4D; font-size: 16px; line-height: 26px; margin: 0;">
        
                                  Dear Citizens For Paula Deacon Garcia,<br><br>
        
                                  ${contactMessage}<br><br>
        
                                  Sincerely,<br>
                                  ${contactName}<br>
                                  ${contactEmailAddress}<br>
                                  ${contactPhoneNumber}
                              </p>
                          </td>
                      </tr>
                      <tr>
                          <td align="center" valign="top" style="padding: 25px 0; font-family: Open Sans, Helvetica, Arial, sans-serif; color: #0000FF;">
                              <p style="font-size: 30px; line-height: 35px; text-shadow: 3px 3px 0 #FFFFFF, 3px -3px 0 #FFFFFF, -3px 3px 0 #FFFFFF, -3px -3px 0 #FFFFFF, 3px 0px 0 #FFFFFF, 0px 3px 0 #FFFFFF, -3px 0px 0 #FFFFFF, 0px -3px 0 #FFFFFF, 3px 3px 0px rgba(0,0,255,0)">
                                #BuildABetterDuPage
                              </p>
                          </td>
                      </tr>
                  </table>
                  <!--[if (gte mso 9)|(IE)]>
                  </td>
                  </tr>
                  </table>
                  <![endif]-->
              </td>
          </tr>
        </table>
        </body>
        </html>
    `
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) console.log('Error occurred with sending email', error);
      else {
        console.log('Email Sent Successfully -- Message Info', info);
      }
    });
  }
};
