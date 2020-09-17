import React from 'react'
import '../App.sass';

function WikiRelatedArticle(props) {

        return (
            <div className="wikiRelatedArticle">
                <h3>Related Wikipedia Articles</h3>
                {props.relatedArticles.map((article) => (
                    <p key={article}><a rel="noopener noreferrer" target="_blank" href={article}>{article}</a></p>
                ))}
                <p><button className="button" onClick={(event) => props.backToMovieDetails(event)}>Back to movie details</button></p>

            </div>
        )

}

export default WikiRelatedArticle;