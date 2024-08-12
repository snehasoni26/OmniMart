const mongoose = require('mongoose');
const Item = require('./Item');

const storeSchema = new mongoose.Schema({
  store_Name:{type: String, required: true },
  inventory: [Item.schema],
  location: { type: String, required: true }
});

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;