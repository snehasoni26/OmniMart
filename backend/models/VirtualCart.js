const mongoose = require('mongoose');
const Item = require('./Item');

const virtualCartSchema = new mongoose.Schema({
  user_Id: { type: String, required: true },
  physical_Cart_Id: { type: mongoose.Schema.Types.ObjectId, ref: 'PhysicalCart' },
  contents: [Item.schema]
});

const VirtualCart = mongoose.model('VirtualCart', virtualCartSchema);
module.exports = VirtualCart;
