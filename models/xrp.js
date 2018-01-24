const mongoose = require('mongoose');

const xrpSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true
  },
  symbol: {
    type: String
  },
  price: {
    type: String
  },
  market_cap: {
    type: String
  },
  percent_change: {
    type: String
  },
  last_updated: {
    type: Date,
    default: Date.now
  }
});

const Xrp = mongoose.model('xrp', xrpSchema);

module.exports = Xrp;
