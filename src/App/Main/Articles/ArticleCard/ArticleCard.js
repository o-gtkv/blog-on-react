import React from 'react'

import './ArticleCard.css'

const ArticleCard = () => {
    return (
        <div className="article-card">
            <div className="article-card__picture">
                <img src="img/home_diet_blog1-960x720.jpg" alt="" />
            </div>
            <div className="article-card__info">
                <div className="article-card__desc">
                    <div className="article-card__desc-header">Vivamus in diam turpis</div>
                    <span className="article-card__line"></span>
                    <p className="text">
                        Lorem ipsum dolor sit amet dui aliquam odio. Aenean interdum wisi accumsan
                        mollis
                        tempus.
                        In venenatis lorem hendrerit wisi. Morbi id eleifend neque.
                    </p>
                </div>
                <a className="btn" href="">Read more</a>
            </div>
        </div>
    )
}

export default ArticleCard