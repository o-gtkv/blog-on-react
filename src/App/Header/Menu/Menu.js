import React, { Fragment } from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import './Menu.css'

const Menu = () => {
    return (
        <Fragment>
            <div className="menu-bar">
                <ul className="menu">
                    <li className="menu__item">
                        <a className="menu__item-link" href="/">Home</a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__item-link" href="/">About us</a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__item-link" href="/">Diets</a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__item-link" href="/">Breakfast</a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__item-link" href="/">Lunch</a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__item-link" href="/">Dinner</a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__item-link" href="/">Contact</a>
                    </li>
                </ul>                        
            </div>
            <div className="mobile-menu">
                <i className="fa fa-bars">menu-icon</i>
                {/* <FontAwesomeIcon icon={["fa", "fa-bars"]}/> */}
            </div>
        </Fragment>
    )
}

export default Menu