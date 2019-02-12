import React, {Component} from 'react';

const Card = (props) => {
    return(
        <div className="card">
            <div className="content">
                <div className="media">
                    <img src={props.img} alt="img" />
                </div>
                <div className="description">
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
                </div>
                <div className={`controls ${props.ctrlsdir}`}>
                    <button className="primary">
                        {props.btntext}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;