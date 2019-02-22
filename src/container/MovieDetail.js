import React, { Component, Fragment } from 'react';
import Card from '../component/Card'
import * as firebase from 'firebase';

export default class Gallery extends Component {
  state = {
    currentMovie: {}
  }

  render () {
    const { movie } = this.props.match.params
    return(
    <h1>
      Detail {movie}
    </h1>
    )
  }
}
