import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { sendEmail } from "../utils/email.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Helper: generate random 6-digit code
function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// ------------------- REGISTER -------------------
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = generateVerificationCode();

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      verificationCode,
      isVerified: false,
      verificationCodeExpiry: Date.now() + 60 * 60 * 1000, // 1 hour
    });

    // Send verification email
    const verificationLink = `${process.env.CLIENT_URL}/verify-email?email=${encodeURIComponent(email)}`;
    try {
      await sendEmail(
        email,
        "Verify your UrbanGlide account",
        `
          <h1>Welcome, ${name}!</h1>
          <p>Your 6-digit verification code is:</p>
          <h2 style="color:#70E000; letter-spacing:3px;">${verificationCode}</h2>
          <p>Or click below to verify directly:</p>
          <a href="${verificationLink}" 
             style="background:#70E000; color:#fff; padding:10px 20px; border-radius:8px; text-decoration:none;">
            Verify My Account
          </a>
          <p>This code expires in 1 hour.</p>
        `
      );
    } catch (err) {
      console.error("Email send failed:", err);
      return res.status(500).json({ message: "Failed to send verification email" });
    }

    return res.status(201).json({
      message: "Account created successfully. Check your email for verification code.",
      user: { id: user._id, email: user.email },
    });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

// ------------------- VERIFY CODE -------------------
router.post("/verify-code", async (req, res) => {
  try {
    const { email, code } = req.body;

    if (!email || !code)
      return res.status(400).json({ message: "Email and code are required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.isVerified)
      return res.status(400).json({ message: "User already verified" });

    if (user.verificationCode !== code)
      return res.status(400).json({ message: "Invalid verification code" });

    if (user.verificationCodeExpiry < Date.now())
      return res.status(400).json({ message: "Verification code expired" });

    // Mark user as verified
    user.isVerified = true;
    user.verificationCode = undefined;
    user.verificationCodeExpiry = undefined;
    await user.save();

    return res.json({ message: "Email verified successfully" });
  } catch (err) {
    console.error("Verify code error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});


// ------------------- LOGIN -------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required" });

    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    if (!user.isVerified)
      return res.status(400).json({ message: "Please verify your email first" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });

    return res.json({
  message: "Login successful",
  token,
  user: { 
    _id: user._id,
    name: user.name,
    email: user.email,
    isVerified: user.isVerified
  },
});

  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

// ------------------- PROFILE -------------------
router.get("/profile", protect, async (req, res) => {
  return res.json({
    message: "Welcome to your profile",
    user: req.user,
  });
});

export default router;
