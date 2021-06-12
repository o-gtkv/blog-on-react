import React, { Fragment } from "react"

const AboutUsCol = () => {
    return (
        <Fragment>
            <h4>About us</h4>
            <ul className="about-us-list offset-top offset-bottom">
                <li className="about-us-list__item">
                    <a className="about-us-list__link" href="">Aenean sollicitudin</a>
                </li>
                <li className="about-us-list__item">
                    <a className="about-us-list__link" href="">Duis sed odio amet</a>
                </li>
                <li className="about-us-list__item">
                    <a className="about-us-list__link" href="">Morbi accumsan velit</a>
                </li>
                <li className="about-us-list__item">
                    <a className="about-us-list__link" href="">Nam nec tellus</a>
                </li>
                <li className="about-us-list__item">
                    <a className="about-us-list__link" href="">Class aptent sociosqu</a>
                </li>
                <li className="about-us-list__item">
                    <a className="about-us-list__link" href="">Mauris erat justo</a>
                </li>
            </ul>            
        </Fragment>
    )
}

export default AboutUsCol