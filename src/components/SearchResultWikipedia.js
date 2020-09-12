import React, {Component} from 'react'
import '../App.scss';

class SearchResultWikipedia extends Component {

    async searchRelatedMovies(event) {
        event.preventDefault();

    }

    render() {

        const { searchResultWikipedia, imdbID } = this.props;
        const articleTitle = (typeof searchResultWikipedia.data === 'undefined') ? "" : searchResultWikipedia.data[0];
        const imdbIDx = (typeof searchResultWikipedia.data === 'undefined') ? 0 : searchResultWikipedia.data.imdbID;
        const leadArticle = (typeof searchResultWikipedia.data === 'undefined') ? "" : searchResultWikipedia.data.leadArticle;
        const page = (typeof searchResultWikipedia.data === 'undefined') ? "" : searchResultWikipedia.data.leadArticle.query.pages;
        const pageID = Object.keys(page)[0];
        return (
            typeof articleTitle !== 'undefined' && articleTitle.length > 0 && imdbIDx === imdbID &&
            <div>
                <h1>Details for {articleTitle}</h1>
                <p dangerouslySetInnerHTML={{ __html: leadArticle.query.pages[pageID].extract }}></p>
                <p><a rel="noopener noreferrer" target="_blank" href={'https://www.imdb.com/title/' + imdbID}>See more on IMDB</a></p>
                <p><a rel="noopener noreferrer" target="_blank" href={'https://www.wikipedia.org/wiki/' + articleTitle}>See more on Wikipedia</a></p>
                <p><button onClick={(event) => this.searchRelatedMovies(event)}>Load related films</button></p>
                <hr/>
            </div>
        )
    }

}

export default SearchResultWikipedia;