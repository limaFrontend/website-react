import React, { Component, Fragment } from 'react';
import Card from '../component/Card'
import Movies from '../utils/Movies';

export default class Gallery extends Component {
  state = {
    currentMovie: {}
  }

  searchMovie = (id) => {
    Movies.loadMovies(data => {
      const movies = Movies.getMovieList(data.val());
      const movie = movies.filter(movie => id == movie.id);

      this.setState({
       currentMovie: movie[0] 
      });

      console.log(this.state);
    })
  }

  componentDidMount() {
    const { movie } = this.props.match.params

    this.searchMovie(movie);
    
  }
  
  render () {
    return(
    <h1>
        Detail {this.state.currentMovie.titulo}
    </h1>
    )
  }
}
