import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;

  try {
    // Check Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1]; // get token part
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // Find user and attach to request
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(401).json({ message: "User not found" });
      }

      next(); //  allow access
    } else {
      return res.status(401).json({ message: "Not authorized, no token" });
    }
  } catch (error) {
    console.error("JWT protect error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Admin
// export const admin = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     next(); // allow access
//   } else {
//     return res.status(401).json({ message: "Not authorized as admin" });
//   }
// };