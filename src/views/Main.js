import React, { Component } from 'react'
import axios from 'axios'
import '../styles/Main.css'
import store from '../store/Store'


const url = "https://api.themoviedb.org/3/movie/popular?api_key=1ef8209013e324deaf69125c71b06293";
//const poster_path = "http://image.tmdb.org/t/p/w185//3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg";

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filterData: [],
            search: ""
        }


    }

    componentDidMount() {
        this.makeRequest()
    }

    makeRequest = () => {
        axios.get(url).then(res => {
            this.setState({
                ...this.state,
                data: res.data.results
            })
        })
        axios.get(url).then(res => console.log(res.data.results))
    };

    saveFavorite = e => {
        let compare = 0
        console.log("compare " + store.getState().favorites)
        let id = e.target.getAttribute('id');
        let flag = 0;
        let favorite = this.state.data.filter(x => x.id === parseInt(id));
        console.log(favorite);
        store.getState().favorites.map(x => { if (x.id === parseInt(id))  { flag = 1 } } );
        if (flag === 0) {
            store.dispatch({
                type: 'SAVE_FAVORITE',
                fav: favorite[0]
            })
        }
    };

    filterMovies = e => {
        let filterMovies = this.state.data.filter(x => x.title.includes(e.target.value));
        this.setState({
            ...this.state,
            search: e.target.value,
            filterData: filterMovies
        })
    };

    returnedData = () => {
        if (this.state.search === '') {
            return (
                <div className="movies-container">

                    {
                        this.state.data.map(movie => {
                            return (
                                <div className="movie-grid" key={movie.id}>

                                    <div className="single-movie">
                                        <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt=""/>

                                        <div className="movie-info">
                                            <p className="movie-title"> {movie.title} </p>
                                            <p className="movie-date"> {movie.release_date} </p>
                                            <p className="movie-overview"> {movie.overview} </p>

                                            <div className="movies-options">
                                                <span id={movie.id} onClick={this.saveFavorite} style={{'color': 'tomato', 'cursor': 'pointer'}}> favorite </span>
                                                <span id={movie.id} style={{'color': 'steelblue', 'cursor': 'pointer'}}> info </span>
                                            </div>

                                        </div>



                                    </div>


                                </div>
                            )
                        })
                    }

                </div>
            )
        } else {
            return (
                <div className="movies-container">

                    {
                        this.state.filterData.map( movie => {
                            return (
                                <div className="movie-grid" key={movie.id}>

                                    <div className="single-movie">
                                        <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt=""/>

                                        <div className="movie-info">
                                            <p className="movie-title"> {movie.title} </p>
                                            <p className="movie-date"> {movie.release_date} </p>
                                            <p className="movie-overview"> {movie.overview} </p>

                                            <div className="movies-options">
                                                <span id={movie.id} onClick={this.saveFavorite} style={{'color': 'tomato', 'cursor': 'pointer'}}> favorite </span>
                                                <span id={movie.id} style={{'color': 'steelblue', 'cursor': 'pointer'}}> info </span>
                                            </div>

                                        </div>



                                    </div>


                                </div>
                            )
                        })
                    }

                </div>
            )
        }
    }

    render () {
        return (
            <div className="main-container">
                <div className="search-container">
                    <h3> Search: </h3>
                    <input onChange={this.filterMovies} className="inputt" type="text"/>
                </div>

                { this.returnedData() }

            </div>
        )
    }

}

