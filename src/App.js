import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Gallery from './container/Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          color="black"
          title="Cinemundo" 
        />
        <div className="container">
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;
