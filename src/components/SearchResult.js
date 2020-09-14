import React, {Component} from 'react'
import '../App.sass';
import axios from "axios";
import { WIKIPEDIA_OPENSEARCH_API_ENDPOINT, WIKIPEDIA_GET_LEAD_ARTICLE_ENDPOINT, WIKIPEDIA_GET_RELATED_ARTICLES_ENDPOINT } from "../Helper";
import SearchResultWikipedia from "./SearchResultWikipedia";
import Poster from "./Poster";
import Spinner from "./Spinner";

class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = { searchResultWikipedia: [], isLoading: false, wikipediaArticleImdbID: false};
    }

    async searchWikipedia(event, searchTitle, imdbID) {
        event.preventDefault();
        await this.setState({ isLoading: true, searchResultWikipedia: [] });
        try {
            let result = await axios.get(WIKIPEDIA_OPENSEARCH_API_ENDPOINT + searchTitle, { headers: {"Access-Control-Allow-Origin": "*"} });
            let leadArticleResult = await axios.get(WIKIPEDIA_GET_LEAD_ARTICLE_ENDPOINT + searchTitle, { headers: {"Access-Control-Allow-Origin": "*"} });
            let relatedArticles = await axios.get(WIKIPEDIA_GET_RELATED_ARTICLES_ENDPOINT + searchTitle, { headers: {"Access-Control-Allow-Origin": "*"} });
            result.data.leadArticle = leadArticleResult.data;
            result.data.imdbID = imdbID;
            result.data.relatedArticles = relatedArticles.data;
            const wikipediaArticleImdbID = (typeof result.data === 'undefined') ? 0 : result.data.imdbID;
            if(imdbID === wikipediaArticleImdbID && result.data.leadArticle) {
                await this.setState({ wikipediaArticleImdbID: wikipediaArticleImdbID} );
                await new Promise(r => setTimeout(r, 2000)); // To simulate the REST API request...
                await this.setState({searchResultWikipedia: result});
                await this.setState({isLoading: false});
            }

        } catch (error) {
            console.log(error);
        }
    }

    render() {

        const {searchResult, isLoading, displayError} = this.props;
        const hasResults = (typeof searchResult !== 'undefined' && searchResult.length > 0)

        return (
            <div>
                <Spinner isLoading={isLoading} />
                {! hasResults && displayError &&
                    <h4>We could not find a movie with that search term. Please try using a different term...</h4>
                }
                {hasResults && <h3>IMDB Movie Database Search Results:</h3>}
                {hasResults && searchResult.map((result) => (
                    <div className="resultCard" key={result.imdbID}>
                        <div className="resultData">
                        <a onClick={(event) => this.searchWikipedia(event, result.Title, result.imdbID)} href="">
                            <h3 className="articleTitle">{result.Title}</h3>
                        </a>
                        <p>Year: {result.Year}</p>
                        <p>IMDB ID: {result.imdbID}</p>
                        <p>Type: {result.Type}</p>
                        </div>
                        <Poster poster={ result.Poster }></Poster>
                        <div className="break"></div>
                        { this.state.wikipediaArticleImdbID === result.imdbID ?
                        <SearchResultWikipedia isLoading={this.state.isLoading} imdbID={result.imdbID} searchResultWikipedia={ this.state.searchResultWikipedia }></SearchResultWikipedia> :
                        <div></div>
                        }
                    </div>
                ))}
            </div>
        )
    }

}

export default SearchResult;