const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const user = new User({
      ...req.body,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    // Respond with success
    res.status(201).json({
      user: {
        name: user.name,
        email: user.email,
      },
      message: "User created successfully!",
    });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res
      .status(500)
      .json({
        message:
          "An error occurred while creating the user. Please try again later.",
      });
  }
};

// Login a user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email and password are required." });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Invalid password. Please try again." });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Respond with user info and token
    res.status(200).json({
      token,
      user: {
        name: user.name,
        email: user.email,
        score: user.score,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
};

// Update user details
exports.updateUser = async (req, res) => {
  try {
    // Check if the user exists
    const tempUser = await User.findById(req.params.id);
    if (!tempUser) {
      return res
        .status(404)
        .json({ message: "User not found. Please try again." });
    }

    const { score } = req.body;

    // Update user fields
    const updatedFields = { score };

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true }
    );

    // Respond with updated user
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Update error:", error.message);
    res.status(400).json({
      message: "Failed to update user.",
      error: error.message,
    });
  }
};
