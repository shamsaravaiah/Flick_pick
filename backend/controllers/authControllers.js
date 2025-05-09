const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Register User
exports.registerUser = async (req, res) => {
    if (!req.body) {
      return res.status(400).json({ message: "No data provided" });
    }
  
    const { fullName, username, email, password, profileImageUrl } = req.body;
  
    if (!fullName || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

  const usernameRegex = /^[a-zA-Z0-9-]+$/;
  if (!usernameRegex.test(username)) {
    return res.status(400).json({
      message: "Invalid username. Only alphanumeric characters and hyphens are allowed. No spaces are permitted.",
    });
  }

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res
        .status(400)
        .json({ message: "Username not available. Try another one." });
    }

    // Create the user
    const user = await User.create({
      fullName,
      username,
      email,
      password,
      profileImageUrl,
    });

    // Generate JWT
    const token = generateToken(user._id);

    // Send response
    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      profileImageUrl: user.profileImageUrl,
      token,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error registering user", error: err.message });
  }
};


// Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
      try {
        const user = await User.findOne({ email });
      
        if (!user || !(await user.comparePassword(password))) {
          return res.status(400).json({ message: "Invalid credentials" });
        }
      
        res.status(200).json({
          id: user._id,
          user: {
            ...user.toObject(),
            totalPollsCreated : 0,
            totalPollsVotes : 0 ,
            totalPollsBookmarked : 0 ,
          },
          token: generateToken(user._id),
        });
      } catch (error) {
        res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
};

// get User info
exports.getUserInfo = async (req, res) => {
   try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const userInfo = {
        ...user.toObject(),
        totalPollsCreated : 0,
        totalPollsVotes : 0 ,
        totalPollsBookmarked : 0 ,
    }; 
    res.status(200).json(userInfo);
    }catch (error) {
      res.stats(500).json({ message: "Error fetching user", error: error.message });
    }
};