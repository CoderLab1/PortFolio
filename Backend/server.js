import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,        // Your Gmail from .env
        pass: process.env.APP_PASSWORD, // Gmail App Password
      },
    });

    // Send professional HTML email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL}>`, // professional sender
      to: process.env.EMAIL,  // your inbox
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.5; color:#333;">
          <h2 style="color:#1a73e8;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background:#f4f4f4; padding:10px; border-radius:5px;">${message}</p>
          <hr/>
          <p style="font-size:12px; color:#999;">This message was sent via your Portfolio Contact Form</p>
        </div>
      `,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
