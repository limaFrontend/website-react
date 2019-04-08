import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './component/Header';
import Gallery from './container/Gallery';
import MovieDetail from './container/MovieDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          color="black"
          title="Cinemundo"
        />
        <div className="container">
          <Router>
            <Fragment>              
              <Route exact path="/" component={Gallery} />
              <Route path="/movie/:movie" component={MovieDetail} />
            </Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
