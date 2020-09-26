import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;


const ArticleContainer = (props) => {

    return(
        <div className="articles-container">
            {props.articles.map(article => (
                <Card
                    key={article.uri}
                    style={{width: 250}}
                    hoverable
                    cover={<img alt="image" src={article.multimedia.find(img => img.format === "thumbLarge").url} />}
                >
                <Meta title={<a href={article.url} target="_blank">{article.title}</a>} description={article.byline} />
                </Card>
            ))}
        </div>
    );
}

export default ArticleContainer;