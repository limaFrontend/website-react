import React, { Component, Fragment } from 'react';
import Card from '../component/Card'
import * as firebase from 'firebase';

export default class Gallery extends Component {

    state = {
        movies: []
    }

    getList = (data) => {
        return Object.entries(data).map(item => item[1]);
    }

    componentDidMount() {
        const loadMovies = firebase.database().ref('peliculas');

        loadMovies.on('value', (snapshot) => {
            this.setState({
                movies: this.getList(snapshot.val())
            })
        });
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