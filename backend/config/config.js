const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

// Pass the MongoDB URL to a const variable
const DB_URL = process.env.MONGO_URL;

mongoose.set('strictQuery', false);

mongoose.connect(DB_URL) // Connect method without deprecated options
  .then(() => {
    console.log('MongoDB Connected'); // Success message
  })
  .catch((error) => {
    console.log('DB Connection Error', error); // Error message
  });