const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// userRegistration
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already Exist.." });

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashPassword });
    await newUser.save();
    res.status(201).json({ message: "'User registered successfully' " });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// user Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //find User
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email and Password" });
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email and Password" });
    // Create JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      token,
      status:"success",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// userLogout
exports.logout = async (req, res) => {
  // In stateless JWT, logout happens on frontend (just delete token)
  res
    .status(200)
    .json({ message: "Logged out successfully (remove token on client)" });
};
