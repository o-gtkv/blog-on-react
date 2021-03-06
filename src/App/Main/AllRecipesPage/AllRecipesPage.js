import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import CenteredItemsContainer from '../Components/CenteredItemsContainer/CenteredItemsContainer'
import RecipesList from '../Components/RecipesList/RecipeList'
import Panel from '../RecipesPage/Panel/Panel'

import './AllRecipesPage.css'

const AllRecipesPage = () => {
    return (
        <>
            <CenteredItemsContainer backgroundImage="/img/home_diet_sectionbg4.jpg" height="200px">
                <h2 className="text-color-white large-content-text">Blog</h2>
            </CenteredItemsContainer>
            <Container>
                <Row>
                    <Col xs={12}>
                        <RecipesList category="all" />
                    </Col>
                </Row>
            </Container>
            <div className="panel-wrapper">
                <Panel />
            </div>
        </>
    )
}

export default AllRecipesPage