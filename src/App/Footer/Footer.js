import React from 'react'

import AboutUsCol from './AboutUsCol/AboutUsCol'
import MissionCol from './MissionCol/MissionCol'
import ContactCol from './ContactCol/ContactCol'

import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-section-1">
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <AboutUsCol />
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <MissionCol />
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <ContactCol />             
                    </div>
                </div>
            </div>
            <div className="footer-section-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <span className="text">© 2021 All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>        
    )
}

export default Footer