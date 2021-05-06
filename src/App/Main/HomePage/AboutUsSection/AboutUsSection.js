import React from 'react'
import { Link } from 'react-router-dom'

import './AboutUsSection.css'

const AboutUsSection = () => {
    return (
        <section className="about-us-section centered-item-stack">
            <div className="container">
                <div className="row">
                    <div className="col-xs-8">
                        <h5 className="text--color-primary text--align-center margin-top--md">About us</h5>
                        <p className="text--align-center">
                            <h2 className="text--color-white">
                                Maecenas eleifend erat at justo fringilla imperdiet id ac magna. Suspendisse vel facilisis
                                odio, at ornare malesuada.
                            </h2>
                        </p>
                        <Link className="btn-link" to="/about-us">Read more about our amazing team</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection