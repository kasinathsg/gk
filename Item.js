const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  building: {
    type: String,
    required: true
  },
  plan: {
    type: [String], // Array of strings
    default: [] // Default value is an empty array
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
