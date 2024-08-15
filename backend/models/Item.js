const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, enum: ['clothing', 'food', 'accessories','healthcare','home'], required: true },
  status: { type: String, enum: ['sold', 'unsold'], default: 'unsold' }
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;