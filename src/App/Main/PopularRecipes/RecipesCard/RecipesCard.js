import React from 'react'

import './RecipesCard.css'

const RecipesCard = () => {
    return (
        <div className="recipes-card">
            <div className="recipes-card__picture">
                <img src="img/home_diet_blog1-960x720.jpg" alt="" />
                <div className="recipes-card__actions">
                    <a className="recipes-card__action-button" href="#">
                        <i className="fa fa-search "></i>
                    </a>
                    <a className="recipes-card__action-button" href="#">
                        <i className="fa fa-link "></i>
                    </a>
                </div>
            </div>
            <div className="recipes-card__info">
                <div className="recipes-card__desc">
                    <div className="recipes-card__desc-header">Phasellus sagittis eget</div>
                    <p className="text">
                        Lorem ipsum dolor sit amet dui aliquam odio. Aenean interdum wisi accumsan
                        mollis
                        tempus.
                        In venenatis lorem hendrerit wisi. Morbi id eleifend neque.
                    </p>
                </div>
                <div className="recipes-card__opt">
                    <div className="like-count">
                        <i className="like-count__icon fa fa-heart-o"></i>
                        <span className="like-count__number">0</span>
                    </div>
                    <div className="read-more-link">
                        <a href="#">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipesCard