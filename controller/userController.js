import User from "../model/userModel.js";

// Middleware to find user by Telegram ID
const findUser = async (req, res, next) => {
  const telegramId = req.body.telegramId || req.query.telegramId;
  if (!telegramId) return res.status(400).json({ message: "telegramId is required" });

  const user = await User.findOne({ telegramId });
  if (!user) return res.status(404).json({ message: "User not found" });

  req.user = user;
  next();
};

export default findUser;