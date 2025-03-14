import React from "react";
import GameList from "../components/GameList";
import AddGame from "../components/AddGame";
import "../styles/Games.css";

const Games = () => {
  return (
    <div className="games-page">
      <h1>Top 10 Games of 2024</h1>
      <AddGame />
      <div className="list-container">
        <GameList />
      </div>
    </div>
  );
};

export default Games;
