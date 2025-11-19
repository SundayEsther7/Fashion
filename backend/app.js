import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoutes from "./Routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: ["http://localhost:5173",
  "https://urbanglide-ij8e.onrender.com"],  // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true, // if you plan to send cookies or auth headers
}));

app.use(express.json());

// Health route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Use routes
app.use("/api/auth", authRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Auth API is running!");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
