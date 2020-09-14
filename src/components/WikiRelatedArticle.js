import React, {Component} from 'react'
import '../App.sass';

class WikiRelatedArticle extends Component {

    render() {

        const { relatedArticles, backToMovieDetails } = this.props;

        return (
            <div className="wikiRelatedArticle">
                <h3>Related Wikipedia Articles</h3>
                {relatedArticles.map((article) => (
                    <p key={article}><a rel="noopener noreferrer" target="_blank" href={article}>{article}</a></p>
                ))}
                <p><button className="button" onClick={(event) => backToMovieDetails(event)}>Back to movie details</button></p>

            </div>
        )
    }

}

export default WikiRelatedArticle;