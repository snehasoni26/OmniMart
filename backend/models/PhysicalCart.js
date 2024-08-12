const mongoose = require('mongoose');
const Item = require('./Item');

const userSchema = new mongoose.Schema({
    physical_Cart_Id: {type: Number,required: true},
  user_Name: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  contents: [Item.schema],
  
});

const User = mongoose.model('User', userSchema);
module.exports = User;