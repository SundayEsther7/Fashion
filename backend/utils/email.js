// backend/utils/email.js
import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  // your gmail
        pass: process.env.EMAIL_PASS,  // app password
      },
    });

    await transporter.sendMail({
      from: `"UrbanGlide" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log(`Email sent to ${to}`);
  } catch (err) {
    console.error(" Email error:", err);
    throw new Error("Failed to send email");
  }
};
