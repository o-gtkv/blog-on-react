import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Contact.css'

const Contact = ({icon, title, contact}) => {
    return (
        <div className="contact-item margin-top--md margin-bottom--md">
            <div>
                <FontAwesomeIcon className="contact-item__icon" icon={icon} />
            </div>
            <div>
                <div className="text">{title}</div>
                <div>{contact}</div>
            </div>
        </div>
    )
}

export default Contact