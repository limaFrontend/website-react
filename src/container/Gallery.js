import React, { Component, Fragment } from 'react';
import Card from '../component/Card'
import * as firebase from 'firebase';

export default class Gallery extends Component {

    state = {
        movies: {}
    }

    loadMovies = () => {


    }

    componentDidMount() {
        const loadMovies = firebase.database().ref('peliculas');

        loadMovies.on('value', (snapshot) => {
            this.setState({
                movies: snapshot.val()
            })
            console.log(this.state);
        });
    }

    render() {

        return (
            <Fragment>
                <h5 className="margin-top-9 margin-bottom-9">Estrenos</h5>
                <div className="flex">
                    <div className="row">
                        {
                            Object.entries(this.state.movies).map((item, index) => {
                                const movie = item[1];
                                console.log(movie);
                                return (
                                    <div className="column padding-5" key={index}>
                                        <Card
                                            title={movie.titulo}
                                            img={movie.image}
                                            description={movie.Resumen}
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