import React, { Fragment } from "react"

import './AboutUsCol.css'

const AboutUsCol = () => {
    const links = [
        {href: '#', text: 'Aenean sollicitudin'},
        {href: '#', text: 'Duis sed odio amet'},
        {href: '#', text: 'Morbi accumsan velit'},
        {href: '#', text: 'Nam nec tellus'},
        {href: '#', text: 'Class aptent sociosqu'},
        {href: '#', text: 'Mauris erat justo'},
    ]

    return (
        <Fragment>
            <h4>About us</h4>
            <ul className="about-us-list">
                {
                    links.map((link, i) =>
                        <li className="about-us-list__item" key={i}>
                            <a className="about-us-list__link" href={link.href}>{link.text}</a>
                        </li>
                    )
                }                                
            </ul>            
        </Fragment>
    )
}

export default AboutUsCol