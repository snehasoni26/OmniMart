const mongoose = require('mongoose');
const Item = require('./Item');
const Order = require('./Order');
const VirtualCart = require('./VirtualCart');
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // Changed from ObjectId to String
  email: { type: String, required: false, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: false, unique: true },
  address: { 
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String }
  },
  dob: { type: Date, required: false}, // Date of Birth
  gender: { type: String, enum: ['Male','Female','Other'], required: false },
  wishlist: [Item.schema], // Wishlist of items
  orders: [Order.schema], // References to order documents
  profile_Info: { type: mongoose.Schema.Types.Mixed }, // Flexible profile information
  profile_image: { type: String }, // Path or URL to profile image
  cart: VirtualCart.schema,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
