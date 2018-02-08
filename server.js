const express = require('express');
const http = require('http');
const app = express();
const logger = require('morgan');
const axios = require('axios');

//DB Setup
const db = require('./config/db');

app.use(logger('dev'));

app.use('/', express.static(__dirname + '/public'));

const url = 'https://api.coinmarketcap.com/v1/ticker/ripple/';

(function () {
  setInterval(function () {
    axios.get(url)
    .then(response => {
      console.log(response.data);
      console.log('------------------------------------');
    })
    .catch(error => {
      console.log(error);
    });
  }, 10000);
}());

//Server Setup
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, function (req, res) {
  console.log('Listening on PORT: ' + PORT);
});
