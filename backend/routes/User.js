const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
// Signup API
router.post('/signup', async (req, res) => {
  try {
    const { user_id, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username: user_id });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ username: user_id, password: hashedPassword });
    await user.save();

    res.status(201).send('User created');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Login API
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(404).send('User not found');
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');
  const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET);
  res.send({ token });
});

// Get User Info API
router.get('/getuserinfo', async (req, res) => {
  try {
    // Get the token from the Authorization header
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
      return res.status(401).send({ error: 'Access denied. No token provided.' });
    }

    // Verify the token and extract the payload (user_id in this case)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user_id = decoded.user_id;

    // Fetch the user information based on the user ID from the token
    const user = await User.findOne({ user_id }).populate('orders');

    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    // Send the user information as the response
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Server error' });
  }
});

// Add to Wishlist API

router.post('/addtowishlist', async (req, res) => {
  try {
    // Get the token from the Authorization header
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
      return res.status(401).send({ error: 'Access denied. No token provided.' });
    }

    // Verify the token and extract the payload (user_id)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user_id = decoded.user_id;

    // Find the user by user_id
    const user = await User.findOne({ user_id });

    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    // Add item to wishlist
    const { item } = req.body;
    user.wishlist.push(item);
    await user.save();

    // Send the updated wishlist as the response
    res.send(user.wishlist);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Server error' });
  }
});
// Get Orders API
router.get('/getorders', async (req, res) => {
  try {
    // Get the token from the Authorization header
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
      return res.status(401).send({ error: 'Access denied. No token provided.' });
    }

    // Verify the token and extract the payload (user_id)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user_id = decoded.user_id;

    // Find the user by user_id and populate their orders
    const user = await User.findOne({ user_id }).populate('orders');

    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    // Send the user's orders as the response
    res.send(user.orders);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Server error' });
  }
});
// Signout API
router.post('/signout', (req, res) => {
  // Handle signout logic
  res.send('User signed out');
});

module.exports = router;
