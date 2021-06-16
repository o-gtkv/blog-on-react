import React from 'react'
import { Link } from 'react-router-dom'

import CenteredItemsContainer from '../../Components/CenteredItemsContainer/CenteredItemsContainer'

const AboutUsSection = () => {
    return (
        <section>
            <CenteredItemsContainer backgroundImage="/img/bg/about_section.jpg" height="800px">        
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8">
                            <h5 className="text-color-primary text-align-center">About us</h5>
                            <div className="text-align-center">
                                <p className="text-color-white large-content-text">
                                    Maecenas eleifend erat at justo fringilla imperdiet id ac magna. Suspendisse vel facilisis
                                    odio, at ornare malesuada.
                                </p>
                            </div>
                            <Link className="btn-link" to="/about-us">Read more about our amazing team</Link>
                        </div>
                    </div>
                </div>
            </CenteredItemsContainer>
        </section>
    )
}

export default AboutUsSection