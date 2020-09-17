import React, { useState } from 'react'
import '../App.sass';
import WikiArticle from "./WikiArticle";
import WikiRelatedArticle from "./WikiRelatedArticle";
import Spinner from "./Spinner";

function SearchResultWikipedia(props) {

    const [page, setPage] = useState('ARTICLE');

    async function searchRelatedMovies(event) {
        event.preventDefault();
        await setPage('RELATED' );
    }

    async function backToMovieDetails(event) {
        event.preventDefault();
        await setPage('ARTICLE' );
    }

        const articleTitle = (typeof props.searchResultWikipedia.data === 'undefined') ? "" : props.searchResultWikipedia.data[0];
        const wikipediaPage = (typeof props.searchResultWikipedia.data === 'undefined') ? "" : props.searchResultWikipedia.data.leadArticle.query.pages;
        const wikipediaPageID = Object.keys(wikipediaPage)[0];
        const leadArticle = (typeof props.searchResultWikipedia.data === 'undefined') ? false : props.searchResultWikipedia.data.leadArticle.query.pages[wikipediaPageID].extract;
        const relatedArticles = (typeof props.searchResultWikipedia.data === 'undefined') ? [] : props.searchResultWikipedia.data.relatedArticles[3];
        let content = ''
        if (page==='ARTICLE' && leadArticle) {
            content = <WikiArticle isLoading={props.isLoading} imdbID={props.imdbID} articleTitle={articleTitle} leadArticle={leadArticle} searchRelatedMovies={searchRelatedMovies}></WikiArticle>;
        } else if(page==='ARTICLE' && leadArticle !== false) {
            content = <div><p>No wikipedia article could be found...</p></div>
        } else if('RELATED') {
            content = <WikiRelatedArticle relatedArticles={relatedArticles} backToMovieDetails={backToMovieDetails}></WikiRelatedArticle>;
        } else {}

        return (

            <div className="container">
                <Spinner isLoading={props.isLoading} />
                { content }
            </div>
        )

}

export default SearchResultWikipedia;