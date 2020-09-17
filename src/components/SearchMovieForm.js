import React, {useState} from 'react'
import '../App.sass';
import SearchResult from "./SearchResult";
import { slugify } from "../Helper";
import {callImdbApi} from "../ApiCaller";

function SearchMovieForm() {

    const [movieTitle, setMovieTitle] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [displayError, setDisplayError] = useState(false);

    function handleChange(event) {
        setMovieTitle(event.target.value);
    }

    function reset(event) {
        event.preventDefault();
        setMovieTitle('');
        setSearchResult([]);
        setIsLoading(false);
        setDisplayError(false);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        setDisplayError(false);
        setSearchResult([]);
        try {
            let searchTitle = slugify(movieTitle);
            let result = await callImdbApi(searchTitle);
            await setIsLoading(false);
            await setSearchResult(result.data.Search);
            await setDisplayError(true);

        } catch (error) {
            console.log(error);
        }
    }

        return (
            <div>
                <div>
                    <form action="#" method="post" onSubmit={handleSubmit}>
                        <div>
                            <label>Search for movies: </label>
                            <input className="movieTitle" value={movieTitle} onChange={handleChange} required id="movieTitle"
                                   name="movieTitle" type="text"/>
                        </div>
                        <p>
                            <button className="button movieSearchButton">Search</button>
                            <button onClick={(event) => reset(event)} className="resetButton">Reset</button>
                        </p>
                    </form>
                </div>
                <SearchResult searchResult = { searchResult } isLoadingParent={isLoading} displayError={displayError}></SearchResult>
            </div>
        )
}

export default SearchMovieForm;
