import React from 'react';

import Logo from './Logo/Logo'
import Menu from './Menu/Menu'

import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-md-4">
                        <Logo />
                    </div>
                    <div className="col-xs-6 col-md-8">
                        <Menu />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header