import React from 'react'
import { faLink, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './RecipesCard.css'

const RecipesCard = ({image, name, description, rate, category}) => {    
        return (
        <div className="recipes-card margin-bottom--md margin-top--md">
            <div className="recipes-card__picture">
                <img src={image} alt="" />
                <div className="recipes-card__actions">
                    <a className="recipes-card__action-button" href="#">                        
                        <FontAwesomeIcon icon={faSearch} />
                    </a>
                    <a className="recipes-card__action-button" href="#">                        
                        <FontAwesomeIcon icon={faLink} />
                    </a>
                </div>
            </div>
            <div className="recipes-card__info">
                <div className="recipes-card__desc">
                    <div className="recipes-card__desc-header">{name}</div>
                    <p className="text">{description}</p>
                </div>
                <div className="recipes-card__opt">
                    <div className="like-count">                        
                        <FontAwesomeIcon className="like-count__icon" icon={faHeart} />
                        <span className="like-count__number">{rate}</span>
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