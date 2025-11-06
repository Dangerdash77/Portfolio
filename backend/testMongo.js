import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

console.log("🧠 Testing MongoDB Connection...");
console.log("URI:", uri ? "Loaded ✅" : "❌ Not found (check .env)");

async function testConnection() {
  try {
    const conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 10000 });
    console.log("✅ MongoDB Connected Successfully to:", conn.connection.host);
    await mongoose.connection.close();
    console.log("🔌 Connection Closed Cleanly");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:");
    console.error(err.message);
  }
}

testConnection();
