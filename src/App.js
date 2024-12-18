import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-bar">
          <Link to="/login" className="nav-link">Login</Link> |
          <Link to="/register" className="nav-link">Register</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;