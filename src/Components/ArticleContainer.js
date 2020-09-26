import React from 'react';

const ArticleContainer = (props) => {


    return(
        <div className="articles-container">
            <h2>Articles</h2>
            <ul>
                {props.articles.map(article => (
                    <li key={article.uri}><a href={article.url}>{article.title}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default ArticleContainer;