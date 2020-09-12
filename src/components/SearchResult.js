import React, {Component} from 'react'
import '../App.scss';
import axios from "axios";
import { WIKIPEDIA_OPENSEARCH_API_ENDPOINT, WIKIPEDIA_GET_LEAD_ARTICLE_ENDPOINT } from "../Helper";
import SearchResultWikipedia from "./SearchResultWikipedia";
import Poster from "./Poster";
import Spinner from "./Spinner";

class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = { searchResultWikipedia: [], isLoading: false };
    }

    async searchWikipedia(event, searchTitle, imdbID) {
        event.preventDefault();
        await this.setState({ isLoading: true });
        try {
            let result = await axios.get(WIKIPEDIA_OPENSEARCH_API_ENDPOINT + searchTitle);
            let leadArticleResult = await axios.get(WIKIPEDIA_GET_LEAD_ARTICLE_ENDPOINT + searchTitle);
            result.data.leadArticle = leadArticleResult.data;
            result.data.imdbID = imdbID;
            await this.setState({ searchResultWikipedia: result });
            await this.setState({ isLoading: false });

        } catch (error) {
            console.log(error);
        }
    }

    render() {

        const {searchResult} = this.props;

        return (
            typeof searchResult !== 'undefined' && searchResult.length > 0 &&
            <div>
                <h1>IMDB Movie Database Search Results</h1>
                {searchResult.map((result) => (
                    <div key={result.imdbID}>
                        <a onClick={(event) => this.searchWikipedia(event, result.Title, result.imdbID)} href="">
                            <p>Title: {result.Title}</p>
                        </a>
                        <p>Year: {result.Year}</p>
                        <p>IMDB ID: {result.imdbID}</p>
                        <p>Type: {result.Type}</p>
                        <Poster poster={ result.Poster }></Poster>
                        {this.state.isLoading && <Spinner />}
                        <SearchResultWikipedia imdbID={result.imdbID} searchResultWikipedia={ this.state.searchResultWikipedia }></SearchResultWikipedia>
                    </div>
                ))}
            </div>
        )
    }

}

export default SearchResult;