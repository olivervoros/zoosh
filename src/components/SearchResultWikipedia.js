import React, {Component} from 'react'
import '../App.sass';
import WikiArticle from "./WikiArticle";
import WikiRelatedArticle from "./WikiRelatedArticle";
import Spinner from "./Spinner";

class SearchResultWikipedia extends Component {

    constructor(props) {
        super(props);
        this.state = { page: 'ARTICLE' };

        this.searchRelatedMovies = this.searchRelatedMovies.bind(this);
        this.backToMovieDetails = this.backToMovieDetails.bind(this);
    }

    async searchRelatedMovies(event) {
        event.preventDefault();
        await this.setState({ page: 'RELATED' });
    }

    async backToMovieDetails(event) {
        event.preventDefault();
        await this.setState({ page: 'ARTICLE' });
    }

    render() {

        const { searchResultWikipedia, imdbID, isLoading } = this.props;
        const articleTitle = (typeof searchResultWikipedia.data === 'undefined') ? "" : searchResultWikipedia.data[0];
        const page = (typeof searchResultWikipedia.data === 'undefined') ? "" : searchResultWikipedia.data.leadArticle.query.pages;
        const pageID = Object.keys(page)[0];
        const leadArticle = (typeof searchResultWikipedia.data === 'undefined') ? "" : searchResultWikipedia.data.leadArticle.query.pages[pageID].extract;
        const relatedArticles = (typeof searchResultWikipedia.data === 'undefined') ? [] : searchResultWikipedia.data.relatedArticles[3];

        let content = ''
        if (this.state.page==='ARTICLE' && leadArticle) {
            content = <WikiArticle isLoading={isLoading} imdbID={imdbID} articleTitle={articleTitle} leadArticle={leadArticle} searchRelatedMovies={this.searchRelatedMovies}></WikiArticle>;
        } else if(this.state.page==='RELATED') {
            content = <WikiRelatedArticle relatedArticles={relatedArticles} backToMovieDetails={this.backToMovieDetails}></WikiRelatedArticle>;
        } else {
            content = <div></div>;
        }

        return (

            <div className="container">
                <Spinner isLoading={isLoading} />
                { content }
            </div>
        )
    }

}

export default SearchResultWikipedia;