// testMongo2.js — more verbose MongoDB connectivity test
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;
console.log(new Date().toISOString(), "🧠 Testing MongoDB Connection...");
console.log(new Date().toISOString(), "URI:", uri ? "Loaded ✅" : "❌ Not found (check .env)");

async function testConnection() {
  try {
    const start = Date.now();
    // Try to connect with short server selection timeout to fail fast if blocked
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // 5s
    });
    const duration = Date.now() - start;
    console.log(new Date().toISOString(), `✅ Connected (host: ${conn.connection.host}) in ${duration}ms`);
    await mongoose.connection.close();
    console.log(new Date().toISOString(), "🔌 Connection closed cleanly");
    process.exit(0);
  } catch (err) {
    console.error(new Date().toISOString(), "❌ MongoDB Connection Failed:");
    console.error(err && err.stack ? err.stack : err);
    // helpful hints
    if (err?.message?.includes("ENOTFOUND") || err?.message?.includes("getaddrinfo")) {
      console.error("▶ DNS/hostname not found — check cluster host name in your connection string.");
    } else if (err?.message?.toLowerCase().includes("authentication failed")) {
      console.error("▶ Authentication failed — check username/password in Atlas user.");
    } else if (err?.message?.toLowerCase().includes("timed out")) {
      console.error("▶ Timed out — check Atlas IP Access List (add 0.0.0.0/0) or try a different network (hotspot).");
    }
    process.exit(1);
  }
}

testConnection();
