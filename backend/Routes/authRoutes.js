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
  return Math.floor(100000 + Math.random() * 900000).toString(); // e.g. "472913"
}

// ------------------- REGISTER -------------------
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = generateVerificationCode();

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      verificationCode,
      isVerified: false,
      verificationCodeExpiry: Date.now() + 10 * 60 * 1000, // expires in 10 mins
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
          <h2 style="color:#0f766e; letter-spacing:3px;">${verificationCode}</h2>
          <p>Or click below to verify directly:</p>
          <a href="${verificationLink}" 
             style="background:#0f766e; color:#fff; padding:10px 20px; border-radius:8px; text-decoration:none;">
            Verify My Account
          </a>
          <p>This code expires in 10 minutes.</p>
        `
      );
    } catch (err) {
      console.error("Register error:", err);
  res.status(500).json({ message: "Server error" });
    }

    res.status(201).json({
      message: "Account created successfully. Check your email for verification code.",
      user: { id: user._id, email: user.email },
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------- VERIFY CODE -------------------
router.post("/verify-code", async (req, res) => {
  try {
    const { email, code } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (user.isVerified)
      return res.status(400).json({ message: "User already verified" });

    if (
      user.verificationCode !== code ||
      user.verificationCodeExpiry < Date.now()
    ) {
      return res.status(400).json({ message: "Invalid or expired code" });
    }

    user.isVerified = true;
    user.verificationCode = undefined;
    user.verificationCodeExpiry = undefined;
    await user.save();

    res.json({ message: "Email verified successfully!" });
  } catch (err) {
    console.error("Verify error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------- RESEND CODE -------------------
router.post("/resend-code", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    if (user.isVerified)
      return res.status(400).json({ message: "Account already verified" });

    const newCode = generateVerificationCode();
    user.verificationCode = newCode;
    user.verificationCodeExpiry = Date.now() + 10 * 60 * 1000; // 10 mins
    await user.save();

    await sendEmail(
      email,
      "Your new UrbanGlide verification code",
      `<p>Your new verification code is:</p><h2>${newCode}</h2>`
    );

    res.json({ message: "New code sent successfully" });
  } catch (err) {
    console.error("Resend error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------- LOGIN -------------------
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (!user.isVerified) {
      return res.status(400).json({ message: "Please verify your email first." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    res.json({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------- FORGOT PASSWORD -------------------
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetLink = `${process.env.CLIENT_URL}/reset-password?token=${resetToken}`;
    await sendEmail(
      email,
      "Reset your password",
      `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`
    );

    res.json({ message: "Password reset email sent!" });
  } catch (err) {
    console.error("Forgot password error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------- RESET PASSWORD -------------------
router.post("/reset-password", async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.json({ message: "Password reset successfully!" });
  } catch (err) {
    console.error("Reset password error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------- PROFILE -------------------
router.get("/profile", protect, async (req, res) => {
  res.json({
    message: "Welcome to your profile",
    user: req.user,
  });
});

export default router;
