// backend/server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const database = require('./src/config/config'); // ✅ MongoDB connection
const authRoutes = require('./src/routes/authroute'); 

dotenv.config();

// Create express app
const app = express();

// Define port
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Frontend address
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// Routes
app.use('/api/auth', authRoutes); // e.g., http://localhost:5000/api/auth/login

// Default route
app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});
