import React, { Fragment } from 'react'
import { faComment, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFax } from '@fortawesome/free-solid-svg-icons'   

import Contact from './Contact/Contact'
import FeedbackForm from './FeedbackForm/FeedbackForm'
import AllRecipesLink from '../Components/AllRecipesLink/AllRecipesLink'

import './ContactPage.css'
import CenteredItemsContainer from '../Components/CenteredItemsContainer/CenteredItemsContainer'


const ContactPage = () => {
    return (
        <Fragment>            
            <CenteredItemsContainer backgroundImage={"/img/home_diet_sectionbg4.jpg"} height={"870px"}>            
                <h2 className="text--color-white">Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor facilisis.</h2>            
            </CenteredItemsContainer>
            <div className="container">
                <div className="row row--justify-center">
                    <div className="col-xs-12 col-md-4">
                        <Contact icon={faEnvelope} title="Have any questions?" contact="noreply@envato.com" />
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <Contact icon={faComment} title="Call us" contact="+61 (0) 3 8376 6284" />
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <Contact icon={faFax} title="Fax" contact="+61 (0) 3 8376 6284" />
                    </div>                
                    <div className="line line--grow-max line--color-gray margin-top--md margin-bottom--md" />
                </div>
                <div className="row row--justify-center">
                    <div className="col-xs-12 col-md-8">
                        <div className="text--align-center">
                            <h2>Cras massa tincidunt</h2>
                            <p className="text">
                                Vestibulum vehicula tempor nulla, sed hendrerit urna interdum in. 
                                Donec et nibh maximus, congue est eu, mattis nunc. 
                                Praesent ut quam quis quam venenatis fringilla.
                            </p>
                            <div className="line line--width-bold line--color-primary line--justify-center margin-bottom--md" />
                            <FeedbackForm />
                        </div>
                    </div>
                </div>                
            </div>    
            <AllRecipesLink />        
        </Fragment>
    )
}

export default ContactPage