import React, { useEffect, useState } from "react";
import { getGames } from "../services/api";
import "../styles/Table.css";

const GameList = () => {
  const [games, setGames] = useState([]); // ✅ Initialize as an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await getGames();
      console.log("Games API Response:", response); // ✅ Debugging
      setGames(response || []); // ✅ Ensure it's always an array
    } catch (error) {
      console.error("Error fetching games:", error);
      setGames([]); // ✅ Handle errors
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  return (
    <div className="table-container">
      <h2>Top 10 Games of 2024</h2>
      {loading ? (
        <p>Loading games...</p>
      ) : games.length === 0 ? (
        <p>No games available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Platform</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game, index) => (
              <tr key={index}>
                <td>{game.title}</td>
                <td>{game.platform}</td>
                <td>{game.genre}</td>
                <td>{game.rating}</td>
                <td>{game.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GameList;
