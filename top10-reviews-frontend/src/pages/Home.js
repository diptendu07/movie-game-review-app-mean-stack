import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the 2024 Top 10 Movies & Games Review</h1>
      <p>Explore the best movies and games of the year!</p>
      <nav>
        <Link to="/movies"><button>View Movies</button></Link>
        <Link to="/games"><button>View Games</button></Link>
      </nav>
    </div>
  );
};

export default Home;
