import React from 'react'

const CenteredItemsContainer = ({backgroundImage, height, children}) => {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',        
        textAlign: 'center',
        height: height,
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',      
        backgroundRepeat: 'no-repeat'  ,
        backgroundSize: 'cover'
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default CenteredItemsContainer
