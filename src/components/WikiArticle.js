import React, {Component} from 'react'
import '../App.sass';
import {escapeHtml} from "../Helper";

class WikiArticle extends Component {

    render() {

        const { articleTitle, leadArticle, imdbID, searchRelatedMovies } = this.props;

        return (
            <div className="wikiArticle">
                <h1>Wikipedia Details / {articleTitle}</h1>
                { leadArticle ?
                <p className="wikiArticleBody" dangerouslySetInnerHTML={{ __html: escapeHtml(leadArticle) }}></p> :
                    <p>No wikipedia article could be found...</p>
                }
                <p><a rel="noopener noreferrer" target="_blank" href={'https://www.imdb.com/title/' + imdbID}>See more on IMDB</a></p>
                <p><a rel="noopener noreferrer" target="_blank" href={'https://www.wikipedia.org/wiki/' + articleTitle}>See more on Wikipedia</a></p>
                <p><button className="button" onClick={(event) => searchRelatedMovies(event)}>Load related films</button></p>
            </div>
        )
    }

}

export default WikiArticle;