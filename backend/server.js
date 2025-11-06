// =============================
// Portfolio Backend Server (Manav Kalola)
// =============================
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
import Contact from "./models/Contact.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// =============================
// Middleware
// =============================
app.use(express.json());

// ✅ Dynamic & strict CORS setup
const allowedOrigins = [
  "https://www.manavkalola.xyz", // live site
  "https://manavkalola.xyz",     // in case non-www is used
  "http://127.0.0.1:5500",       // local dev
  "http://localhost:5500"        // local dev
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow REST tools or server-to-server calls (no Origin header)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        console.warn(`❌ CORS blocked request from origin: ${origin}`);
        return callback(new Error("CORS not allowed for this origin"));
      }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// =============================
// MongoDB Connection
// =============================
async function connectDB() {
  try {
    console.log("⏳ Connecting to MongoDB...");
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000, // 10s timeout
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err.message);
    console.log("💡 Tip: Check your network or Atlas IP Access List");
    setTimeout(connectDB, 5000); // retry after 5s
  }
}
connectDB();

mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ MongoDB disconnected! Retrying...");
  setTimeout(connectDB, 5000);
});

// =============================
// Nodemailer Setup
// =============================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify mail setup
transporter.verify((err) => {
  if (err) console.error("❌ Email Transporter Error:", err.message);
  else console.log("✅ Email Transporter Ready");
});

// =============================
// Routes
// =============================

// Health Check
app.get("/", (req, res) => {
  res.send("🌐 Portfolio Backend Running Successfully!");
});

// Contact API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    console.log("📩 Incoming Contact Form:", { name, email, subject, message });

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to MongoDB
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    console.log("✅ Contact saved to MongoDB");

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `📩 New Portfolio Message: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");

    res.status(200).json({ success: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ ERROR in /api/contact:", err);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }
});

// =============================
// Start Server
// =============================
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
