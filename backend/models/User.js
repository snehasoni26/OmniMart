const mongoose = require('mongoose');
const Item = require('./Item');
const Order = require('./Order');

const userSchema = new mongoose.Schema({
  user_Name: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone_Number: { type: String, required: true, unique: true },
  address: { 
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String }
  },
  dob: { type: Date, required: true}, // Date of Birth
  gender: { type: String, enum: ['Male','Female','Other'], required: true },
  wishlist: [Item.schema], // Wishlist of items
  orders: [Order.schema], // References to order documents
  profile_Info: { type: mongoose.Schema.Types.Mixed }, // Flexible profile information
  profile_image: { type: String } // Path or URL to profile image
});

const User = mongoose.model('User', userSchema);
module.exports = User;
