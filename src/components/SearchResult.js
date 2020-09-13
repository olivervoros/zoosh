import React, {Component} from 'react'
import '../App.sass';
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
            await new Promise(r => setTimeout(r, 2000)); // TODO: remove
            await this.setState({ isLoading: false });

        } catch (error) {
            console.log(error);
        }
    }

    render() {

        const {searchResult, isLoading} = this.props;

        return (
            typeof searchResult !== 'undefined' && searchResult.length > 0 &&
            <div>
                <Spinner isLoading={isLoading} />
                <h4>IMDB Movie Database Search Results:</h4>
                {searchResult.map((result) => (
                    <div className="resultCard" key={result.imdbID}>
                        <div className="resultData">
                        <a onClick={(event) => this.searchWikipedia(event, result.Title, result.imdbID)} href="">
                            <h3>{result.Title}</h3>
                        </a>
                        <p>Year: {result.Year}</p>
                        <p>IMDB ID: {result.imdbID}</p>
                        <p>Type: {result.Type}</p>
                        </div>
                        <Poster poster={ result.Poster }></Poster>
                        <div className="break"></div>
                        <SearchResultWikipedia isLoading={this.state.isLoading} imdbID={result.imdbID} searchResultWikipedia={ this.state.searchResultWikipedia }></SearchResultWikipedia>
                    </div>
                ))}
            </div>
        )
    }

}

export default SearchResult;