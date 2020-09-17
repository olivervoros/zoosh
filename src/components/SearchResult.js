import React, {useState} from 'react'
import '../App.sass';
import SearchResultWikipedia from "./SearchResultWikipedia";
import Poster from "./Poster";
import Spinner from "./Spinner";
import {callWikipediaApi} from "../ApiCaller";

function SearchResult(props) {

    const [searchResultWikipedia, setSearchResultWikipedia] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [wikipediaArticleImdbID, setWikipediaArticleImdbID] = useState(false);

    async function searchWikipedia(event, searchTitle, imdbID) {
        event.preventDefault()
        setIsLoading(true);
        setSearchResultWikipedia([]);
        try {
            let result = await callWikipediaApi(searchTitle, imdbID);
            const wikipediaArticleImdbID = (typeof result.data === 'undefined') ? 0 : result.data.imdbID;
            if (imdbID === wikipediaArticleImdbID) {
                setWikipediaArticleImdbID(wikipediaArticleImdbID);
                setSearchResultWikipedia(result);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const hasResults = (typeof props.searchResult !== 'undefined' && props.searchResult.length > 0);

    const results = hasResults && props.searchResult.map((result) =>
        <div className="resultCard" key={result.imdbID}>
            <div className="resultData">
                <a onClick={(event) => searchWikipedia(event, result.Title, result.imdbID)} href="">
                    <h3 className="articleTitle">{result.Title}</h3>
                </a>
                <p>Year: {result.Year}</p>
                <p>IMDB ID: {result.imdbID}</p>
                <p>Type: {result.Type}</p>
            </div>
            <Poster poster={result.Poster} />
            <div className="break" />
            {wikipediaArticleImdbID === result.imdbID ?
                <SearchResultWikipedia isLoading={isLoading} imdbID={result.imdbID} searchResultWikipedia={searchResultWikipedia} /> :
                <div />
            }
        </div>
    );

    const errorMessage = !hasResults && props.displayError &&
        <h4>We could not find a movie with that search term. Please try using a different term...</h4>;

    const mainTitle = hasResults && <h3>IMDB Movie Database Search Results:</h3>

    return (
        <div>
            <Spinner isLoading={props.isLoadingParent}/>
            { errorMessage }
            { mainTitle }
            { results }
        </div>
    )


}

export default SearchResult;