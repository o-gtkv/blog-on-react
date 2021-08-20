import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RecipesList from '../../Components/RecipesList/RecipeList'

import './PopularRecipesSection.css'

const PopularRecipesSection = () => {
    return (
        <section className="popular-recipes">
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="popular-recipes__header">
                            <span className="popular-recipes__header-text">The most popular recipes</span>
                        </div>
                    </Col>                    
                </Row>                                
                <RecipesList category={'popular'} />                    
            </Container>
        </section>
    )
}

export default PopularRecipesSection