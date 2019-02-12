import React, { Component } from 'react';

const Header = (props) => {
    return (
        <header className={`${props.color}`}>
            <h6>{props.title}</h6>
        </header>
    );
}

export default Header;