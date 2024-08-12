const mongoose = require('mongoose');
const Item = require('./Item');

const orderSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  user_Name: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  contents: [Item.schema]
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
