const express = require('express');
const http = require('http');
const app = express();
const logger = require('morgan');

//DB Setup
const db = require('./config/db');

app.use(logger('dev'));

app.use('/', express.static(__dirname + '/public'));

//Server Setup
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, function (req, res) {
  console.log('Listening on PORT: ' + PORT);
});
