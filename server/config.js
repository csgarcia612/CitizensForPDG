const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  gmailUsername: `${process.env.GMAIL_USERNAME}`,
  gmailSecret: `${process.env.GMAIL_SECRET}`
};
