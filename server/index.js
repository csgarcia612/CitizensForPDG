const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailerController = require('./controllers/nodemailerController');

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
