import React, { Fragment } from "react"
import { faFacebookF, faTwitter, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactCol = () => {
    return (
        <Fragment>
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
                <li><a href=""><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faDribbble} /></a></li>
            </ul>                       
        </Fragment>
    )
}

export default ContactCol