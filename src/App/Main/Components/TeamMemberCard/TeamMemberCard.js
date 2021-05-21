import React from 'react'

import './TeamMemberCard.css'

const TeamMemberCard = ({
    photo, 
    name, 
    age, 
    country, 
    about, 
    textAlignCenter=false, 
    photoInfoLayout='vertical',
    ...props
}) => {
    const photoInfoLayoutStyleVertical = {}
    const photoInfoLayoutStyleHorizontal = {
        display: 'flex', 
        columnGap: '15px', 
        justifyContent: 'center'               
    }

    const textAlignStyle = {
        textAlign: textAlignCenter ? 'center' : 'initial'
    }

    const photoInfoLayoutStyle = photoInfoLayout === 'horizontal' ? photoInfoLayoutStyleHorizontal : photoInfoLayoutStyleVertical
    const photoStyle = photoInfoLayout === 'horizontal' ? {width: '100px', alignSelf: 'flex-end'} : {}

    return (
        <div className={(props.className || '') + ' team-member-card'} style={textAlignStyle}>            
            <div style={photoInfoLayoutStyle}>
                <img src={photo} alt="" style={photoStyle} />
                <div>
                    <h3 className="team-member-card__name margin-top--md ">{name}</h3>
                    <div className="team-member-card__personal-data text">{age} years cooker</div>
                    <div className="team-member-card__personal-data text">{country}</div>                
                </div>
            </div>
            <p className="team-member-card__about text">{about}</p>            
        </div>        
    )
}

export default TeamMemberCard