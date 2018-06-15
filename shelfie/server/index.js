const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const axios = require('axios');
const massive = require('massive');

require('dotenv').config({ path: __dirname + '/../.env', });

const app = express();
app.use(bodyParser.json());

massive(process.env.DB_CONNECTION_STRING)
  .then(dbInstance => {
    console.log('DB Connected')
    app.set('db', dbInstance);
  })
  .catch(err => {
    console.warn(err);
  });

app.get('/', (req, res) => {
  res.send('Hello, I am Server.');
})

const port = 4000;
app.listen(port, () => { console.log(`Server listening at localhost:${port}`); });