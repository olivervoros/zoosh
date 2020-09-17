import React from 'react'
import '../App.sass';
import {escapeHtml, IMDB_WEBSITE_URL, WIKIPEDIA_WEBSITE_URL} from "../Helper";

function WikiArticle(props) {

        return (
            <div className="wikiArticle">
                <h1>Wikipedia Details / {props.articleTitle}</h1>
                <p className="wikiArticleBody" dangerouslySetInnerHTML={{ __html: escapeHtml(props.leadArticle) }}></p>
                <p><a rel="noopener noreferrer" target="_blank" href={IMDB_WEBSITE_URL + props.imdbID}>See more on IMDB</a></p>
                <p><a rel="noopener noreferrer" target="_blank" href={WIKIPEDIA_WEBSITE_URL + props.articleTitle}>See more on Wikipedia</a></p>
                <p><button className="button" onClick={(event) => props.searchRelatedMovies(event)}>Load related films</button></p>
            </div>
        )

}

export default WikiArticle;