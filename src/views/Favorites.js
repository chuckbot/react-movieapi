import React, {Component}  from 'react';
import store from '../store/Store'

import '../styles/Favorites.css'
let movies = [];

store.subscribe(() => {
    movies = store.getState().favorites;
    console.log(movies)
});

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };

        store.subscribe(() => {
            this.setState({
                movies: store.getState().favorites
            })
        })
    }

    render () {
        return (
            <div>

                <div className="main-fav-container">
                    <h3 className="subtitle" > My favorites</h3>
                    {
                        this.state.movies.map(movie => {
                            return (
                                <div className="favorites-movies" key={movie.id}>
                                    <img  src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt=""/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}



export default Favorites;