import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

import './RecentPost.css'
import { Link } from 'react-router-dom'

const RecentPost = ({name, date, image, className}) => {    
    return (
        <Link className={"recent-post " + className} to="/">
            <div className="recent-post__info">
                <div className="recent-post__info-item">{name}</div>
                <div className="recent-post__info-item">                    
                    <FontAwesomeIcon className="recent-post__info-item-icon" icon={faClock} />
                    <span className="recent-post__info-item-date">{date.toDateString()}</span>                                            
                </div>
            </div>
            <div className="recent-post__img">
                <img src={image} alt="" />
            </div>
        </Link>
    )
}

export default RecentPost