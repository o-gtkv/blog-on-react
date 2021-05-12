import React, { Fragment } from 'react'

import TeamMemberCard from './TeamMemberCard/TeamMemberCard'
import AllRecipesLink from '../Components/AllRecipesLink/AllRecipesLink'

import teamDB from './teamDB'

const AboutUsPage = () => {
    return (
        <Fragment>
            <img src="/img/home_diet_about1.jpg" alt="" />
            <div className="container">    
                <div className="row">                
                    <div className="col-xs-8">                        
                        <h5 className="text--color-primary text--align-center margin-top--md">About us</h5>
                        <div className="text--align-center margin-top--md">
                            <h2 className="margin-bottom--lg">
                                Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan, massa non consectetur condimentum, 
                                diam arcu tristique nibh, nec egestas diam elit at nulla. Suspendisse potenti. In non lacinia risus, 
                                ac tempor ipsum. Phasellus venenatis leo eu semper varius.
                            </h2>                        
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <h5 className="text--color-primary text--align-center margin-bottom--md">Meet our staff</h5>
                    </div>
                </div>
                <div className="row">
                    {
                        teamDB.map(teamMemberData => (
                            <div className="col-xs-12 col-md-4" key={teamMemberData.id}>
                                <TeamMemberCard {...teamMemberData} />
                            </div>
                        ))
                    }
                </div>                
                <div className="row">
                    <div className="col-xs-12">
                        <h5 className="text--color-primary text--align-center margin-bottom--md margin-top--lg">Our mission</h5>                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 text--align-center margin-bottom--md">
                        <img src="/img/home_diet_about5.png" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="text--align-center margin-bottom--lg">
                            Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat.
                        </h2>
                    </div>
                </div>
            </div>
            <AllRecipesLink />
        </Fragment>
    )
}

export default AboutUsPage
