import React from 'react'

import './ProcentageScale.css'

const ProcentageScale = ({label, value, ...props}) => {
    if (value > 100) {
        value = 100
    }
    else if (value < 0) {
        value = 0
    }
    
    return (
        <div className={(props.className || '') + ' procentage-scale'}>
            <div className="procentage-scale__info">
                <div className="procentage-scale__info-label">
                    {label}
                </div>
                <div className="procentage-scale__info-value">
                    {`${value}%`}
                </div>            
            </div>
            <div className="procentage-scale__scale">
                <div className="procentage-scale__scale-value" style={{width: `${value}%`}} />
            </div>
        </div>
    )
}

export default ProcentageScale

