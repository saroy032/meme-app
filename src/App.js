import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Meme from "./Meme";
import About from './About';
import NewPage from './NewPage';

class App extends Component {
  render() {
    return (
      <Router>
      <Routes>
        <Route path="/" element={<Meme />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/newpage" element={<NewPage />} />
      </Routes>
    </Router>
    );
  }
}

export default App;
