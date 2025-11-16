
import axios from "axios";

export const sendEmail = async (to, subject, html) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "UrbanGlide", email: process.env.EMAIL_USER },
        to: [{ email: to }],
        subject,
        htmlContent: html,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_KEY,
        },
      }
    );


  } catch (err) {
    throw new Error("Failed to send email");
  }
};
