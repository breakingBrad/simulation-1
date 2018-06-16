const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');

require('dotenv').config({ path: __dirname + '/../.env', });

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

massive(process.env.DB_CONNECTION_STRING)
  .then(dbInstance => {
    console.log('DB Connected')
    app.set('db', dbInstance);
  })
  .catch(err => {
    console.warn(err);
  });

app.get('/api/inventory', controller.getInventory)
app.post('/api/product', controller.createProduct)
// app.delete('/api/product/:id'), controller.deleteProduct)

app.get('/', (req, res) => {
  res.send('Hello, I am Server.');
})

const port = 4000;
app.listen(port, () => { console.log(`Server listening at localhost:${port}`); });