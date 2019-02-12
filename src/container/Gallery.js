import React, { Component, Fragment } from 'react';
import Card from '../component/Card'

export default class Gallery extends Component {



    render() {

        const movies = [{
            "title": "Aquaman",
            "image": "https://i.ibb.co/1nmJMpQ/aquaman.jpg",
            "description": "Aquaman debe recuperar el legendario Tridente de Atlan para salvar a la ciudad subacuática de Atlantis, y al mundo de la superficie, de su hermano hambriento de poder."
        }, {
            "title": "Aquaman",
            "image": "https://i.ibb.co/1nmJMpQ/aquaman.jpg",
            "description": "Aquaman debe recuperar el legendario Tridente de Atlan para salvar a la ciudad subacuática de Atlantis, y al mundo de la superficie, de su hermano hambriento de poder."
        }, {
            "title": "Aquaman",
            "image": "https://i.ibb.co/1nmJMpQ/aquaman.jpg",
            "description": "Aquaman debe recuperar el legendario Tridente de Atlan para salvar a la ciudad subacuática de Atlantis, y al mundo de la superficie, de su hermano hambriento de poder."
        }];

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
                                            title={movie.title}
                                            img={movie.image}
                                            description={movie.description}
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