import React, { Component } from 'react'
import '../App.sass';
import axios from "axios";
import SearchResult from "./SearchResult";
import { IMDB_API_ENDPOINT, slugify } from "../Helper";

class SearchMovieForm extends Component {

    constructor(props) {
        super(props);
        this.state = {movieTitle: '', searchResult: [], isLoading: false, displayError: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({movieTitle: event.target.value});
    }

    reset(event) {
        event.preventDefault();
        this.setState({movieTitle: '', searchResult: [], isLoading: false, displayError: false});
    }

    async handleSubmit(event) {
        event.preventDefault();
        await this.setState({ isLoading: true, displayError: false });
        const searchTitle = this.state.movieTitle;
        try {
            let result = await axios.get(IMDB_API_ENDPOINT + slugify(searchTitle));
            await new Promise(r => setTimeout(r, 2000)); // To simulate the REST API request...
            await this.setState({ isLoading: false });
            await this.setState({ searchResult: result.data.Search });
            await this.setState({ displayError: true });

        } catch (error) {
            console.log(error);
        }
    }


    render() {

        return (
            <div>
                <div>
                    <form action="#" method="post" onSubmit={this.handleSubmit}>
                        <div>
                            <label>Search for movies: </label>
                            <input className="movieTitle" value={this.state.movieTitle} onChange={this.handleChange} required id="movieTitle"
                                   name="movieTitle" type="text"/>
                        </div>
                        <p>
                            <button className="button movieSearchButton">Search</button>
                            <button onClick={(event) => this.reset(event)} className="resetButton">Reset</button>
                        </p>
                    </form>
                </div>
                <SearchResult searchResult = { this.state.searchResult } isLoading={this.state.isLoading} displayError={this.state.displayError}></SearchResult>
            </div>
        )
    }
}

export default SearchMovieForm;
