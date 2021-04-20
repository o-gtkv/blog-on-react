import React, { Fragment } from 'react';



const Menu = () => {
    return (
        <Fragment>
            <div className="menu-bar">
                <ul className="menu">
                    <li className="menu__item">
                        <a class="menu__item-link" href="/">Home</a>
                    </li>
                    <li className="menu__item">
                        <a class="menu__item-link" href="/">About us</a>
                    </li>
                    <li className="menu__item">
                        <a class="menu__item-link" href="/">Diets</a>
                    </li>
                    <li className="menu__item">
                        <a class="menu__item-link" href="/">Breakfast</a>
                    </li>
                    <li className="menu__item">
                        <a class="menu__item-link" href="/">Lunch</a>
                    </li>
                    <li className="menu__item">
                        <a class="menu__item-link" href="/">Dinner</a>
                    </li>
                    <li className="menu__item">
                        <a class="menu__item-link" href="/">Contact</a>
                    </li>
                </ul>                        
            </div>
            <div className="mobile-menu">
                <i className="fa fa-bars"></i>
            </div>
        </Fragment>
    )
}

export default Menu