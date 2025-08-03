import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Home({ message }) {
  return <h1>{message}</h1>;
}

function About() {
  return <h1>About Burger App</h1>;
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home message="Welcome to Burger App!" />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
