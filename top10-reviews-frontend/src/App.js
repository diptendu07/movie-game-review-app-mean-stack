import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Games from "./pages/Games";
import "./styles/App.css"; // ✅ Import Global Styles

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/movies">Movies</Link> | <Link to="/games">Games</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </Router>
  );
};

export default App;
