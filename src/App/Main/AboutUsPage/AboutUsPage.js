import React from 'react'
import { connect } from 'react-redux'

import TeamMemberCard from '../Components/TeamMemberCard/TeamMemberCard'
import AllRecipesLink from '../Components/AllRecipesLink/AllRecipesLink'

import './AboutUsPage.css'
import { Col, Container, Row } from 'react-bootstrap'

const AboutUsPage = ({teamDB}) => {
    if (!teamDB.length)
        return null

    return (
        <div className="about-us-page">
            <img src="/img/bg/about.jpg" alt="" />
            <Container>    
                <Row className="page-block d-flex justify-content-center">                
                    <Col xs={8}>                        
                        <h5 className="text-color-primary text-align-center">About us</h5>
                        <h2 className="text-align-center">                           
                            Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan, massa non consectetur condimentum,
                            diam arcu tristique nibh, nec egestas diam elit at nulla. Suspendisse potenti. In non lacinia risus,
                            ac tempor ipsum. Phasellus venenatis leo eu semper varius.                            
                        </h2>
                    </Col>
                </Row>
                <Row className="page-block">
                    <Col xs={12}>
                        <h5 className="text-color-primary text-align-center">Meet our staff</h5>
                    </Col>
                    {
                        teamDB.map(teamMemberData => (
                            <Col xs={12} md={4} key={teamMemberData.id}>
                                <TeamMemberCard {...teamMemberData} textAlignCenter={true} />
                            </Col>
                        ))
                    }
                </Row>
                <div className="row page-block">
                    <Col xs={12}>
                        <h5 className="text-color-primary text-align-center">Our mission</h5>                  
                    </Col>
                    <Col xs={12} className="text-align-center">
                        <img src="/img/digits.png" alt="" />
                    </Col>
                </div>
                <div className="row page-block">
                    <div xs={12}>
                        <h2 className="text-align-center">
                            Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat.
                        </h2>
                    </div>
                </div>
            </Container>
            <AllRecipesLink />
        </div>
    )
}

const mapStateToProps = (state) => ({
    teamDB: state.teamState.teamList
})

export default connect(mapStateToProps)(AboutUsPage)
