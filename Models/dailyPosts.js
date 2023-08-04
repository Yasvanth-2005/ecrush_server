const mongoose = require("mongoose");

const dailyPostSchema = mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("DailyPost", dailyPostSchema);
