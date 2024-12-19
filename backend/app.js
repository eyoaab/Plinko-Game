const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./Configurations/db.config");

// Routes
const userRoute = require('./Routes/user.routes');

// Initialize app and load environment variables
dotenv.config();
const app = express();

if (!process.env.PORT || !process.env.MONGO_URI) {
  console.error("Error: Missing required environment variables.");
  process.exit(1);
}

connectDB();

// Middlewares
app.use(express.json()); 
//for cores
app.use(cors()); 
// Routes

app.use('/users', userRoute);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

module.exports = app;