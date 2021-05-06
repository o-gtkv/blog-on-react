import React from 'react'
import { faFacebookF, faTwitter, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-section-1">
                <div className="row">
                    <div className="col-xs-12 col-md-4">
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
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <h4>Mission</h4>
                        <p className="text">
                            <strong>Phasellus metus ac turpis egestas. Vestibulum massa nec odio leo</strong>, pretium
                            bibendum mi, nec ultrices posuere tristique commodo.
                        </p>
                        <p className="text">
                            Curabitur ultrices eget, bibendum iaculis augue. Aenean sit amet dolor. Maecenas viverra
                            nonummy, mi. Cras rhoncus ut, semper auctor. Nam molestie.
                            Nulla interdum sem at porttitor vel, congue odio lobortis tincidunt in, ornare laoreet. Nam in
                            faucibus tempor.
                        </p>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <h4>Contact</h4>
                        <p className="text">
                            <strong>BeDiet</strong>- Phasellus orci luctus et lacus lorem, tempus tellus. Integer mattis.
                        </p>                        
                        <div>
                            <a className="text" href="tel:+61 (0) 3 8376 6284">+61 (0) 3 8376 6284</a>
                        </div>
                        <div>
                            <a className="text" href="mailto:noreply@envato.com">noreply@envato.com</a>
                        </div>                        
                        <ul className="socials offset-top">
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faDribbble} />
                                </a>
                            </li>
                        </ul>                        
                    </div>
                </div>
            </div>
            <div className="footer-section-2">
                <span className="text">© 2021 BeDiet - BeTheme. All Rights Reserved. Muffin group</span>
            </div>
        </footer>        
    )
}

export default Footer