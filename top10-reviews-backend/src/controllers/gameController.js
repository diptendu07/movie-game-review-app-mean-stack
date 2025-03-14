const Game = require("../models/Game");

exports.getGames = async (req, res) => {
  try {
    const games = await Game.find().sort({ rating: -1 }).limit(10); // Sort by rating (highest first) & limit to 10
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addGame = async (req, res) => {
  const { title, platform, genre, rating, summary } = req.body;
  try {
    const newGame = new Game({ title, platform, genre, rating, summary });
    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
