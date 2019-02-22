import React, { Component } from 'react';

const Header = (props) => {
    return (
        <header className={`${props.color}`}>
            <h5>{props.title}</h5>
        </header>
    );
}

export default Header;