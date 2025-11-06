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
  "https://manavkalola.xyz",     // non-www variant
  "http://127.0.0.1:5500",       // local testing
  "http://localhost:5500"        // local testing
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow REST clients, etc.
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
      serverSelectionTimeoutMS: 10000,
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
// Nodemailer Setup (Secure Gmail)
// =============================
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // fixes SSL issues on Render
  },
});

// Verify mail setup
transporter.verify((err, success) => {
  if (err) console.error("❌ Email Transporter Error:", err.message);
  else console.log("✅ Email Transporter Ready:", success);
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

    // Send email (non-blocking for better UX)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `📩 New Portfolio Message: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("⚠️ Email send failed:", error.message);
      } else {
        console.log("✅ Email sent successfully:", info.response);
      }
    });

    res.status(200).json({ success: "Message received successfully!" });
  } catch (err) {
    console.error("❌ ERROR in /api/contact:", err);
    res
      .status(500)
      .json({ error: "Internal server error. Please try again later." });
  }
});

// =============================
// Start Server
// =============================
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
