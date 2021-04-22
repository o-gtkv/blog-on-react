import React from 'react'

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-xs-8">
                        <h5 className="about-us__title">About us</h5>
                        <p className="about-us__text" style={{display: 'block'}}>
                            Maecenas eleifend erat at justo fringilla imperdiet id ac magna. Suspendisse vel facilisis
                            odio, at ornare malesuada.
                        </p>
                        <a className="btn" href="">Read more about our amazing team</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs