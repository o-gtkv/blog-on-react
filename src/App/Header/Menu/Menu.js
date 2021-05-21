import React, { Component, Fragment } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import './Menu.css'

class Menu extends Component {  
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
                        <li onClick={this.toggleMenuBar} className="menu__item">
                            <Link className="menu__item-link" to="/">Home</Link>
                        </li>
                        <li onClick={this.toggleMenuBar} className="menu__item">
                            <Link className="menu__item-link" to="/about-us">About us</Link>
                        </li>
                        {/* <li onClick={this.toggleMenuBar} className="menu__item">
                            <Link className="menu__item-link" to="/diets">Diets</Link>
                        </li> */}
                        <li onClick={this.toggleMenuBar} className="menu__item">
                            <Link className="menu__item-link" to="/breakfast">Breakfast</Link>
                        </li>
                        <li onClick={this.toggleMenuBar} className="menu__item">
                            <Link className="menu__item-link" to="/lunch">Lunch</Link>
                        </li>
                        <li onClick={this.toggleMenuBar} className="menu__item">
                            <Link className="menu__item-link" to="/dinner">Dinner</Link>
                        </li>
                        <li onClick={this.toggleMenuBar} className="menu__item">
                            <Link className="menu__item-link" to="/contact">Contact</Link>
                        </li>
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