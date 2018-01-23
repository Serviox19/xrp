const mongoose = require('mongoose');

if (process.env.PORT) {
  //use hosted db
} else {
  mongoose.connect('mongodb://localhost/xrp');
}

mongoose.set('debug', true);

const db = mongoose.connection;

db.on('connected', function () {
  console.log('Mongoose Connection Successful');
});

db.on('error', function (err) {
  console.log('Mongoose Error: ' + err);
});

module.exports = db;
