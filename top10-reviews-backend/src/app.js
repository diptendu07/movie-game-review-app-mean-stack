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

// Routes
app.use("/api/movies", require("./routes/movieRoutes"));
app.use("/api/games", require("./routes/gameRoutes"));

module.exports = app;
