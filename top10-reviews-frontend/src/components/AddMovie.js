import React, { useState } from "react";
import { addMovie } from "../services/api";
import "../styles/Form.css"; // ✅ Import Form Styles

const AddMovie = () => {
  const [movie, setMovie] = useState({ title: "", year: "", genre: "", rating: "", summary: "" });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMovie(movie);
    alert("Movie added successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
      <input type="number" name="year" placeholder="Year" onChange={handleChange} required />
      <input type="text" name="genre" placeholder="Genre" onChange={handleChange} required />
      <input type="number" name="rating" placeholder="Rating" step="0.1" onChange={handleChange} required />
      <textarea name="summary" placeholder="Summary" onChange={handleChange} required></textarea>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
