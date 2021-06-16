import React, { Component, Fragment } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import './Menu.css'

class Menu extends Component {  
    menuItems = [
        {name: 'Home', link: '/'},
        {name: 'About us', link: '/about-us'},
        {name: 'Breakfast', link: '/breakfast'},        
        {name: 'Lunch', link: '/lunch'},
        {name: 'Dinner', link: '/dinner'},
        {name: 'Contact', link: '/contact'}
    ]

    toggleMenuBar = () => {
        const menuBar = document.querySelector('.menu-bar')        
        if (menuBar.classList.contains('visible-elem')) {
            menuBar.classList.remove('visible-elem')
        } else {
            menuBar.classList.add('visible-elem')
        }
    }    
    
    render() {
        return (    
            <Fragment>
                <div className="menu-bar">
                    <ul className="menu">                         
                        {
                            this.menuItems.map((menuItem, i) => (
                                <li className="menu__item" key={i} onClick={this.toggleMenuBar}>
                                    <Link className="menu__item-link" to={menuItem.link}>{menuItem.name}</Link>
                                </li>
                            ))
                        }                                                    
                    </ul>                        
                </div>
                <div onClick={this.toggleMenuBar} className="mobile-menu">                
                    <FontAwesomeIcon icon={faBars}/>
                </div>
            </Fragment>
        )
    }
}

export default Menu