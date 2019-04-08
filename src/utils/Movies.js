import * as firebase from 'firebase';

export default class Movies{
  static loadMovies (callback) {
    const database = firebase.database().ref('peliculas');
    database.on('value', data => callback(data));
  }

  static getMovieList = (data) => {
    return Object.entries(data).map(item => item[1]);
  }
}