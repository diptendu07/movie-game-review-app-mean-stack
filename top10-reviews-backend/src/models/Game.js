const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  title: String,
  platform: String,
  genre: String,
  rating: Number,
  summary: String,
});

module.exports = mongoose.model("Game", gameSchema);
