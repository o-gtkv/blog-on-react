import React from 'react'

import './ArticleCard.css'

const ArticleCard = ({image, name, description}) => {
    return (
        <div className="article-card">
            <div className="article-card__picture">
                <img src={image} alt="" />
            </div>
            <div className="article-card__info">
                <div className="article-card__desc">
                    <div className="article-card__desc-header">{name}</div>
                    <span className="article-card__line" />
                    <p className="text">
                        {description}
                    </p>
                </div>
                <a className="btn-link" href="">Read more</a>
            </div>
        </div>
    )
}

export default ArticleCard