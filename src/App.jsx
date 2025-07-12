import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Research from './pages/Research';
import BlogPost from './pages/BlogPost';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Research" element={<Research />} />
        <Route path="/blog/ai-makes-developers-spend-more-time" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
