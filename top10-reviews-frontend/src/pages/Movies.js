import React from "react";
import MovieList from "../components/MovieList";
import AddMovie from "../components/AddMovie";
import "../styles/Movies.css";

const Movies = () => {
  return (
    <div className="movies-page">
      <h1>Top 10 Movies of 2024</h1>
      <AddMovie />
      <div className="list-container">
        <MovieList />
      </div>
    </div>
  );
};

export default Movies;
