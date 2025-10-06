import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  telegramId: { type: String, required: true, unique: true }, // Telegram user ID
  chatId: { type: String, required: true }, // chat ID to send messages
  keyword: { type: String, required: true }, // user-entered keyword for job filtering
  jobcount: { type: Number, default: 0 }, // number of jobs to send
  joinedAt: { type: Date, default: Date.now }, // when the user started the bot
  lastNotifiedAt: { type: Date } // when the last job notification was sent
});

export default mongoose.model("User", UserSchema);
