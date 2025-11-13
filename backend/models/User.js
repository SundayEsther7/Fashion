import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetToken: String,
    resetTokenExpiry: Date,
    verificationToken: String,
    verificationCode: { type: String },
    verificationCodeExpiry: { type: Date },
     codeExpires: Date,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
