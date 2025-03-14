const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send(`
      <h1>Welcome to the Movie & Game Review API</h1>
      <p>Use the following endpoints:</p>
      <ul>
        <li><a href="/api/movies">/api/movies</a> - Get top 10 movies</li>
        <li><a href="/api/games">/api/games</a> - Get top 10 games</li>
      </ul>
    `);
  });

// Routes
app.use("/api/movies", require("./routes/movieRoutes"));
app.use("/api/games", require("./routes/gameRoutes"));

module.exports = app;
