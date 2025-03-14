import axios from "axios";

// ✅ Load API URL from .env file
const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
  throw new Error("REACT_APP_API_URL is not defined in .env file. Please set it before running the app.");
}

// ✅ Fetch Movies
export const getMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/movies`);
    return response.data || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

// ✅ Add Movie
export const addMovie = async (movie) => {
  try {
    await axios.post(`${API_URL}/movies`, movie);
  } catch (error) {
    console.error("Error adding movie:", error);
  }
};

// ✅ Fetch Games
export const getGames = async () => {
  try {
    const response = await axios.get(`${API_URL}/games`);
    return response.data || [];
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
};

// ✅ Add Game
export const addGame = async (game) => {
  try {
    await axios.post(`${API_URL}/games`, game);
  } catch (error) {
    console.error("Error adding game:", error);
  }
};

// ✅ Debugging: Check if API URL is loaded correctly
console.log("API URL from .env:", API_URL);