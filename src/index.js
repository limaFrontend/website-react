import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCseDZdTnPsfWVWq-Zdi-N6qC3PEcRFvAo",
    authDomain: "prueba-firebase-vivo.firebaseapp.com",
    databaseURL: "https://prueba-firebase-vivo.firebaseio.com",
    projectId: "prueba-firebase-vivo",
    storageBucket: "prueba-firebase-vivo.appspot.com",
    messagingSenderId: "187438902560"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
