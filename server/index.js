const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const nodemailerController = require('./controllers/nodemailerController');

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.GMAILUSERNAME,
    pass: process.env.GMAILSECRET
  }
});

transporter.verify(function(error, success) {
  if (error) {
    console.log('*** Error with connection to Gmail', error);
  } else {
    console.log('Server connection to Gmail is ready to take messages');
  }
});

app.use(bodyParser.json());

app.post('/api/nodemailer', nodemailerController.sendEmail);

app.use(express.static(`${__dirname}/../build`));

const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
