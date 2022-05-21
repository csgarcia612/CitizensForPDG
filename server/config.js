const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  gmailUsername: `${process.env.GMAIL_USERNAME}`,
  gmailSecret: `${process.env.GMAIL_SECRET}`,
  gmailClientId: `${process.env.GMAIL_CLIENT_ID}`,
  gmailClientSecret: `${process.env.GMAIL_CLIENT_SECRET}`,
  gmailRefreshToken: `${process.env.GMAIL_REFRESH_TOKEN}`,
  gmailAccessToken: `${process.env.GMAIL_ACCESS_TOKEN}`,
  etherealClientId: `${process.env.ETHEREAL_CLIENT_ID}`,
  etherealClientSecret: `${process.env.ETHEREAL_CLIENT_SECRET}`,
};
