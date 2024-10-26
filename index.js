// Load environment variables from .env file
require('dotenv').config();

// Import Express framework and other modules
const express = require('express');
const connectDB = require('./config/db'); // Import MongoDB connection function
const weatherRoutes = require('./routes/weatherRoutes'); // Import weather routes

// Initialize Express app
const app = express();

// Define the port to use, defaulting to 5000 if not specified
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON data in requests
app.use(express.json());

// Define the route for weather API
app.use('/api/weather', weatherRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
