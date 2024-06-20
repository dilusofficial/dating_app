const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dating_app');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('Error connecting to MongoDB: ', err);
});