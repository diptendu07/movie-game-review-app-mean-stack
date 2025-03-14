import React, { useState } from "react";
import { addGame } from "../services/api";
import "../styles/Form.css"; // ✅ Import Form Styles

const AddGame = () => {
  const [game, setGame] = useState({ title: "", platform: "", genre: "", rating: "", summary: "" });

  const handleChange = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addGame(game);
    alert("Game added successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
      <input type="text" name="platform" placeholder="Platform" onChange={handleChange} required />
      <input type="text" name="genre" placeholder="Genre" onChange={handleChange} required />
      <input type="number" name="rating" placeholder="Rating" step="0.1" onChange={handleChange} required />
      <textarea name="summary" placeholder="Summary" onChange={handleChange} required></textarea>
      <button type="submit">Add Game</button>
    </form>
  );
};

export default AddGame;
