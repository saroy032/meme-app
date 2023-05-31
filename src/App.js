import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import Meme from "./Meme";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="Meme App" />
        <Meme />
        <Footer name="my foot" />
      </div>
    );
  }
}

export default App;
