import React, { Component, Fragment } from 'react';
import Card from '../component/Card'
import Movies from '../utils/Movies';

export default class Gallery extends Component {

    state = {
        movies: []
    }

    componentDidMount() {

        Movies.loadMovies(data => {
            this.setState({
                movies: Movies.getMovieList(data.val())
            });
        })
    }

    render() {

        const movies = this.state.movies;

        return (
            <Fragment>
                <h5 className="margin-top-9 margin-bottom-9">Estrenos</h5>
                <div className="flex">
                    <div className="row">
                        {
                            movies.map((movie, index) => {
                                return (
                                    <div className="column padding-5" key={index}>
                                        <Card
                                            title={movie.titulo}
                                            img={movie.image}
                                            btntext="Reservar"
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </Fragment>


        );
    }
}