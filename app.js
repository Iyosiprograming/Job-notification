import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import router from "./router.js";          // API routes
import { bot } from "./tgBot.js";          // Telegram bot

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ------------------- Middleware -------------------
app.use(express.json()); // parse JSON bodies

// ------------------- MongoDB Connection -------------------
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ------------------- API Routes -------------------
app.use("/api", router);

// ------------------- Start Express Server -------------------
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/* // ------------------- Launch Telegram Bot -------------------
bot.launch().then(() => console.log("Telegram bot started"));

// ------------------- Graceful Shutdown -------------------
process.once("SIGINT", () => {
  console.log("Stopping bot...");
  bot.stop("SIGINT");
  process.exit(0);
});
process.once("SIGTERM", () => {
  console.log("Stopping bot...");
  bot.stop("SIGTERM");
  process.exit(0);
});
 */