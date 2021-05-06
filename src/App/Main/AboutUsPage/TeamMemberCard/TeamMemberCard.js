import React from 'react'

import './TeamMemberCard.css'

const TeamMemberCard = ({photo, name, age, country, about}) => {
    return (
        <div className="team-member-card">
            <img src={photo} alt="" />
            <h3 className="team-member-card__name margin-top--md margin-bottom--md">{name}</h3>
            <div className="team-member-card__personal-data text">{age} years cooker</div>
            <div className="team-member-card__personal-data text">{country}</div>
            <p className="team-member-card__about text">{about}</p>            
        </div>        
    )
}

export default TeamMemberCard