import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {AppRouter} from "./router/Router";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Route component={AppRouter}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
