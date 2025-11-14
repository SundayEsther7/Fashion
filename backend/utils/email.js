// backend/utils/email.js
import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // important for Render
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"UrbanGlide" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    };

    // Try once
    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.log("First attempt failed, retrying in 1.5s...");

      // Retry after delay (Render cold start fix)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await transporter.sendMail(mailOptions);
    }

    console.log(`Email sent to ${to}`);
  } catch (err) {
    console.error("Email error:", err);
    throw new Error("Failed to send email");
  }
};
