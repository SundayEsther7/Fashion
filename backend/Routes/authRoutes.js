// backend/routes/authRoutes.js

import express from "express";
import User from "./models/User.js"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// REGISTER USER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "Account created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});



export default router;
