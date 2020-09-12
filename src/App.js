import React, {Component} from 'react';
import SearchMovieForm from "./components/SearchMovieForm";
import './App.scss';

class App extends Component {

    render() {

        return (
            <div className="container">
                <p>Welcome to the Zoosh movie database searcher.</p>
                <SearchMovieForm></SearchMovieForm>
            </div>
        )
    }
}

export default App;