const Movie = require("../models/Movie");

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().sort({ rating: -1 }).limit(10); // Sort by rating (highest first) & limit to 10
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addMovie = async (req, res) => {
  const { title, year, genre, rating, summary } = req.body;
  try {
    const newMovie = new Movie({ title, year, genre, rating, summary });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
