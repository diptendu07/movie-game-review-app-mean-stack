const express = require("express");
const { getGames, addGame } = require("../controllers/gameController");
const router = express.Router();

router.get("/", getGames);
router.post("/", addGame);

module.exports = router;
