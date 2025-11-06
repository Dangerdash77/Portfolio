// =============================
// Portfolio Backend Server (Manav Kalola)
// =============================
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { Resend } from "resend";
import Contact from "./models/Contact.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// =============================
// Middleware
// =============================
app.use(express.json());

const allowedOrigins = [
  "https://www.manavkalola.xyz",
  "https://manavkalola.xyz",
  "http://127.0.0.1:5500",
  "http://localhost:5500",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      console.warn(`❌ CORS blocked request from: ${origin}`);
      return callback(new Error("CORS not allowed for this origin"));
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
      serverSelectionTimeoutMS: 10000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err.message);
    console.log("💡 Tip: Check Atlas IP Access List or network");
    setTimeout(connectDB, 5000);
  }
}
connectDB();

// =============================
// Resend Email Setup
// =============================
const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send Email via Resend API
    try {
      await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: process.env.EMAIL_USER,
        subject: `📩 New Portfolio Message: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });
      console.log("✅ Email sent successfully via Resend");
    } catch (mailError) {
      console.error("⚠️ Email failed via Resend:", mailError.message);
    }

    res.status(200).json({ success: "Message received successfully!" });
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
