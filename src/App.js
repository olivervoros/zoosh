import React, {Component} from 'react';
import SearchMovieForm from "./components/SearchMovieForm";
import './App.sass';

class App extends Component {

    render() {

        return (
            <div className="container">
                <h2>Welcome to the Zoosh movie database searcher!</h2>
                <SearchMovieForm></SearchMovieForm>
            </div>
        )
    }
}

export default App;