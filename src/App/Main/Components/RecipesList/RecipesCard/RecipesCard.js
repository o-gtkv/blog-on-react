import React, { useState } from 'react'
import { faLink, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import './RecipesCard.css'


const RecipesCard = ({id, image, name, description, likes}) => {
    const recipePath = `/recipes/${id}`
    const [likesCount, incLikesCount] = useState(likes)

    return (
        <div className="recipes-card">
            <div className="recipes-card__picture">
                <img src={image} alt="" />
                <div className="recipes-card__actions">
                    <a className="recipes-card__action-button" href={image}>                        
                        <FontAwesomeIcon icon={faSearch} />
                    </a>
                    <Link className="recipes-card__action-button" to={recipePath}>                        
                        <FontAwesomeIcon icon={faLink} />
                    </Link>
                </div>
            </div>
            <div className="recipes-card__info">
                <div className="recipes-card__desc">
                    <div className="recipes-card__desc-header">{name}</div>
                    <p className="text">{description}</p>
                </div>
                <div className="recipes-card__opt">
                    <div className="like-count">                        
                        <FontAwesomeIcon className="like-count__icon" icon={faHeart} onClick={() => incLikesCount(likesCount + 1)} />
                        <span className="like-count__number">{likesCount}</span>
                    </div>
                    <div className="read-more-link">
                        <Link to={recipePath}>Read more</Link>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipesCard