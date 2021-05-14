import React from 'react'
import { Link } from 'react-router-dom'

import CenteredItemsContainer from '../../Components/CenteredItemsContainer/CenteredItemsContainer'

const AboutUsSection = () => {
    return (
        <section>
            <CenteredItemsContainer backgroundImage={"/img/home_diet_sectionbg3.jpg"} height={"800px"}>        
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8">
                            <h5 className="text--color-primary text--align-center margin-top--md">About us</h5>
                            <div className="text--align-center">
                                <h2 className="text--color-white slide-text margin-top--md margin-bottom--md">
                                    Maecenas eleifend erat at justo fringilla imperdiet id ac magna. Suspendisse vel facilisis
                                    odio, at ornare malesuada.
                                </h2>
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