const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const storeRoutes = require('./routes/store');
const cartRoutes = require('./routes/cart');

const app = express();
app.use(express.json());

// Use Routes
app.use('/user', userRoutes);
app.use('/store', storeRoutes);
app.use('/cart', cartRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://omnimart2610:sh2JZqUchbnAvxfA@omnimart.57scs.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000, () => console.log('Server running on port 3000')))
  .catch(err => console.error(err));
