import React, { useEffect, useState } from "react";
import { getMovies } from "../services/api";
import "../styles/Table.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]); // ✅ Initialize as an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await getMovies();
      console.log("Movies API Response:", response); // ✅ Debugging
      setMovies(response || []); // ✅ Ensure it's always an array
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]); // ✅ Handle errors
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  return (
    <div className="table-container">
      <h2>Top 10 Movies of 2024</h2>
      {loading ? (
        <p>Loading movies...</p>
      ) : movies.length === 0 ? (
        <p>No movies available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.genre}</td>
                <td>{movie.rating}</td>
                <td>{movie.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MovieList;
