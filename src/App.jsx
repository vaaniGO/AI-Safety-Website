import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Research from './pages/Research';
import Podcast from './pages/Podcast';
import Events from './pages/Events';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Research" element={<Research />} />
        <Route path="/pages/Podcast" element={<Podcast />} />
        <Route path="/pages/Events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
