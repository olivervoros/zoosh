import React, { Component } from 'react'
import '../App.scss';
import axios from "axios";
import SearchResult from "./SearchResult";
import Spinner from "./Spinner";
import { IMDB_API_ENDPOINT } from "../Helper";

class SearchMovieForm extends Component {

    constructor(props) {
        super(props);
        this.state = {movieTitle: '', searchResult: [], isLoading: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({movieTitle: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        await this.setState({ isLoading: true });
        const searchTitle = this.state.movieTitle;
        try {
            let result = await axios.get(IMDB_API_ENDPOINT + searchTitle);
            await this.setState({ searchResult: result.data.Search });
            await this.setState({ isLoading: false });

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
                            <input value={this.state.movieTitle} onChange={this.handleChange} required id="movieTitle"
                                   name="movieTitle" type="text"/>
                        </div>
                        <p>
                            <button>Search</button>
                        </p>
                    </form>
                </div>
                {this.state.isLoading && <Spinner />}
                    <SearchResult searchResult = { this.state.searchResult }></SearchResult>
            </div>
        )
    }
}

export default SearchMovieForm;
