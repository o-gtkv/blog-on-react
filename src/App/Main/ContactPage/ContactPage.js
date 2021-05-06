import React, { Fragment } from 'react'
import Contact from './Contact/Contact'

const ContactPage = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <Contact icon="" title="Have any questions?" contact="" />
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <Contact icon="" title="Call us" contact="" />
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <Contact icon="" title="Fax" contact="" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ContactPage