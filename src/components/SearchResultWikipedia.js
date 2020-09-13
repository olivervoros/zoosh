import React, {Component} from 'react'
import '../App.sass';
import Spinner from "./Spinner";

class SearchResultWikipedia extends Component {

    async searchRelatedMovies(event) {
        event.preventDefault();

    }

    render() {

        const { searchResultWikipedia, imdbID, isLoading } = this.props;
        const articleTitle = (typeof searchResultWikipedia.data === 'undefined') ? "" : searchResultWikipedia.data[0];
        const wikipediaArticleImdbID = (typeof searchResultWikipedia.data === 'undefined') ? 0 : searchResultWikipedia.data.imdbID;
        const page = (typeof searchResultWikipedia.data === 'undefined') ? "" : searchResultWikipedia.data.leadArticle.query.pages;
        const pageID = Object.keys(page)[0];
        const leadArticle = (typeof searchResultWikipedia.data === 'undefined') ? "" : searchResultWikipedia.data.leadArticle.query.pages[pageID].extract;

        return (

            typeof articleTitle !== 'undefined' && articleTitle.length > 0 && wikipediaArticleImdbID === imdbID &&
            <div className="wikiArticle">
                <Spinner isLoading={isLoading} />
                <h1>Details for {articleTitle}</h1>
                <p dangerouslySetInnerHTML={{ __html: leadArticle }}></p>
                <p><a rel="noopener noreferrer" target="_blank" href={'https://www.imdb.com/title/' + imdbID}>See more on IMDB</a></p>
                <p><a rel="noopener noreferrer" target="_blank" href={'https://www.wikipedia.org/wiki/' + articleTitle}>See more on Wikipedia</a></p>
                <p><button className="button" onClick={(event) => this.searchRelatedMovies(event)}>Load related films</button></p>
            </div>
        )
    }

}

export default SearchResultWikipedia;