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

// ------------------- REGISTER -------------------//
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
      verificationCodeExpiry: Date.now() + 24 * 60 * 60 * 1000, // 1 Day
    });

    // ------------Send verification email--------------//
    const verificationLink = `${
      process.env.CLIENT_URL
    }/verify-email?email=${encodeURIComponent(email)}`;
    try {
      await sendEmail(
        email,
        "Verify your UrbanGlide account",
        `
        <div style="font-family:Arial,sans-serif; line-height:1.5; color:#333;">
        <h1>Welcome, ${name}!</h1>
         <p>Your 6-digit verification code is:</p>
         <h2 style="color:#70E000; letter-spacing:3px;">${verificationCode}</h2>
         <p>Or click the button below to verify directly:</p>
        <a href="${verificationLink}" 
         style="display:inline-block; background:#70E000; color:#fff; padding:12px 24px; border-radius:8px; text-decoration:none; font-weight:bold;">
        Verify My Account
        </a>
       <p style="margin-top:16px; font-size:0.9rem; color:#555;">This code expires in 1 day.</p>
       </div>
        `
      );
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Failed to send verification email" });
    }

    return res.status(201).json({
      message:
        "Account created successfully. Check your email for verification code.",
      user: { id: user._id, email: user.email },
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

// ------------------- VERIFY CODE -------------------//
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
    return res.status(500).json({ message: "Server error" });
  }
});

// ------------------- RESEND VERIFICATION CODE -------------------///
router.post("/resend-code", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.isVerified)
      return res.status(400).json({ message: "User already verified" });

    // Generate new code
    const newCode = generateVerificationCode();
    user.verificationCode = newCode;
    user.verificationCodeExpiry = Date.now() + 60 * 60 * 1000; // 1 hour
    await user.save();

    // Send email
    const verificationLink = `${
      process.env.CLIENT_URL
    }/verify-email?email=${encodeURIComponent(email)}`;
    await sendEmail(
      email,
      "Your new verification code",
      `<div style="font-family:Arial,sans-serif; line-height:1.5; color:#333;">
         <h2 style="color:#70E000; letter-spacing:3px;">${verificationCode}</h2>
         <p>Or click the button below to verify directly:</p>
        <a href="${verificationLink}" 
         style="display:inline-block; background:#70E000; color:#fff; padding:12px 24px; border-radius:8px; text-decoration:none; font-weight:bold;">
        Verify My Account
        </a>
       <p style="margin-top:16px; font-size:0.9rem; color:#555;">This code expires in 1 hour.</p>
       </div>`
    );

    return res.json({ message: "New verification code sent" });
  } catch (err) {
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
    if (!user)
      return res.status(400).json({ message: "Invalid credentials" });

    // 24-hour verification lock
    const verificationDeadline =
      user.createdAt.getTime() + 24 * 60 * 60 * 1000;

    if (!user.isVerified && Date.now() > verificationDeadline) {
      return res.status(403).json({
        blocked: true,
        message: "You must verify your email before continuing. Your account is locked.",
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    return res.json({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
      },
      needsVerification: !user.isVerified, // Login allowed, but warn them
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

// ------------------- PASSWORD RESET -------------------//
router.post("/request-reset", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate 6-digit code
    const resetCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Save code with expiry (15 minutes)
    user.resetCode = resetCode;
    user.resetCodeExpires = Date.now() + 60 * 60 * 1000;
    await user.save();

    // Send email
    // Build Reset Password Email Template
    const resetLink = `${
      process.env.CLIENT_URL
    }/reset-password?email=${encodeURIComponent(email)}`;

    await sendEmail(
      email,
      "Your Password Reset Code",
      `
  <div style="font-family:Arial,sans-serif; line-height:1.5; color:#333;">
    <h2 style="color:#70E000; letter-spacing:3px; text-align:center;">
      ${resetCode}
    </h2>

    <p>Use the code above to reset your password. Or click the button below:</p>

    <a href="${resetLink}"
      style="display:inline-block; background:#70E000; color:#fff; padding:12px 24px; border-radius:8px; text-decoration:none; font-weight:bold;">
      Reset My Password
    </a>

    <p style="margin-top:16px; font-size:0.9rem; color:#555;">
      This code expires in 1 hour.
    </p>
  </div>
  `
    );

    res.json({ message: "Reset code sent to email" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------------Reset Password---------------------//
router.post("/reset-password", async (req, res) => {
  try {
    const { email, code, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.resetCode || user.resetCode !== code) {
      return res.status(400).json({ message: "Invalid code" });
    }

    if (user.resetCodeExpires < Date.now()) {
      return res.status(400).json({ message: "Code has expired" });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    user.password = hashed;
    user.resetCode = undefined;
    user.resetCodeExpires = undefined;
    await user.save();

    res.json({ message: "Password reset successful. You can now log in." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ------------------- PROFILE -------------------
router.get("/profile", protect, async (req, res) => {
  return res.json({
    message: "Welcome to your profile",
    user: req.user,
  });
});

// ------------------- TRIGGER VERIFICATION EMAIL ------------------- //
router.post("/trigger-verify", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.isVerified)
      return res.status(400).json({ message: "User already verified" });

    // Generate new verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    user.verificationCode = verificationCode;
    user.verificationCodeExpiry = Date.now() + 60 * 60 * 1000; // 1 hour
    await user.save();

    const verificationLink = `${process.env.CLIENT_URL}/verify-email?email=${encodeURIComponent(user.email)}`;

    await sendEmail(
      user.email,
      "Verify your UrbanGlide account",
      `<div style="font-family:Arial,sans-serif; line-height:1.5; color:#333;">
         <h2 style="color:#70E000; letter-spacing:3px;">${verificationCode}</h2>
         <p>Or click the button below to verify directly:</p>
         <a href="${verificationLink}" 
            style="display:inline-block; background:#70E000; color:#fff; padding:12px 24px; border-radius:8px; text-decoration:none; font-weight:bold;">
           Verify My Account
         </a>
         <p style="margin-top:16px; font-size:0.9rem; color:#555;">This code expires in 1 hour.</p>
       </div>`
    );

    res.json({ message: "Verification email sent successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
