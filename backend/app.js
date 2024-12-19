const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./configurations/db.config");

// Import route handlers
const userRoute = require('./routes/user.routes');
const gameRoute = require('./routes/game.routes');

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Validate required environment variables
if (!process.env.PORT || !process.env.MONGO_URI) {
  console.error("Error: Missing required environment variables.");
  process.exit(1); // Exit the application if variables are missing
}

// Connect to the MongoDB database
connectDB();

// Middlewares
// Parse incoming JSON requests
app.use(express.json());

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Set up API routes
app.use('/user', userRoute); // Routes for user-related endpoints
app.use('/game', gameRoute); // Routes for game-related endpoints

// Global error handler for uncaught errors
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error", // Return error message
    stack: process.env.NODE_ENV === "production" ? null : err.stack, // Hide stack trace in production
  });
});

// Export the configured app
module.exports = app;
