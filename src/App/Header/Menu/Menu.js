import React, { Fragment, useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import './Menu.css'

const Menu = () =>  {  
    // const [menuBarIsVisible, setMenuBarIsVisible] = useState(false)

    const menuItems = [
        {name: 'Home', link: '/'},
        {name: 'About us', link: '/about-us'},
        {name: 'Breakfast', link: '/breakfast'},        
        {name: 'Lunch', link: '/lunch'},
        {name: 'Dinner', link: '/dinner'},
        {name: 'Contact', link: '/contact'}
    ]

    function toggleMenuBar() {
        // setMenuBarIsVisible(prevState => !prevState.menuBarIsVisible)
        const menuBar = document.querySelector('.menu-bar')        
        if (menuBar.classList.contains('visible-elem')) {
            menuBar.classList.remove('visible-elem')
        } else {
            menuBar.classList.add('visible-elem')
        }
    }
    // + menuBarIsVisible ? ' visible-elem' : ''
    return (    
        <>
            <div className={'menu-bar'}>
                <ul className="menu">                         
                    {
                        menuItems.map((menuItem, i) =>
                            <li className="menu__item" key={i} onClick={toggleMenuBar}>
                                <Link className="menu__item-link" to={menuItem.link}>
                                    {menuItem.name}
                                </Link>
                            </li>
                        )
                    }                                                    
                </ul>                    
            </div>
            <div onClick={toggleMenuBar} className="mobile-menu">                
                <FontAwesomeIcon icon={faBars}/>
            </div>
        </>
    )
}

export default Menu