const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Signup API
router.post('/signup', async (req, res) => {
  const { user_id, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ user_id, password: hashedPassword });
  await user.save();
  res.status(201).send('User created');
});

// Login API
router.post('/login', async (req, res) => {
  const { user_id, password } = req.body;
  const user = await User.findOne({ user_id });
  if (!user) return res.status(404).send('User not found');
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');
  const token = jwt.sign({ user_id: user.user_id }, 'your_jwt_secret');
  res.send({ token });
});

// Get User Info API
router.get('/getuserinfo', async (req, res) => {
  const { user_id } = req.query;
  const user = await User.findOne({ user_id }).populate('orders');
  res.send(user);
});

// Add to Wishlist API
router.post('/addtowishlist', async (req, res) => {
  const { user_id, item } = req.body;
  const user = await User.findOne({ user_id });
  user.wishlist.push(item);
  await user.save();
  res.send(user.wishlist);
});

// Get Orders API
router.get('/getorders', async (req, res) => {
  const { user_id } = req.query;
  const user = await User.findOne({ user_id }).populate('orders');
  res.send(user.orders);
});

// Signout API
router.post('/signout', (req, res) => {
  // Handle signout logic
  res.send('User signed out');
});

module.exports = router;
