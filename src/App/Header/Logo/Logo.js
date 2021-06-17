import React from 'react'
import { Link } from 'react-router-dom'

import './Logo.css'

const Logo = () => {
    return (
        <Link to='/'>
            <img className="logo" src="/img/logo.png" alt="" />        
        </Link>        
    )
}

export default Logo