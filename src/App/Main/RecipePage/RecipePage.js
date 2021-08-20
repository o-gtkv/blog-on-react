import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'

import CenteredItemsContainer from '../Components/CenteredItemsContainer/CenteredItemsContainer'
import AllRecipesLink from '../Components/AllRecipesLink/AllRecipesLink'

import Comments from '../Components/Comments/Comments'
import TeamMemberCard from '../Components/TeamMemberCard/TeamMemberCard'
import ProcentageScale from './ProcentageScale/ProcentageScale'

import './RecipePage.css'

const RecipePage = ({recipesDB, teamDB, match, comments, handleAddComment}) => {
    if (!recipesDB.length || !teamDB.length)
        return null

    const {
        id,
        authorID,
        advice,
        image,
        name,
        stat,
        fullDescription
    } = {...recipesDB.find(recipe => recipe.id === Number(match.params.id))}

    const renderAdviceBlock = () => (        
        <div className="recipe-page__content-info-block">
            <h5 className="text-color-primary">Good advice</h5>
            <p className="text good-advice">{advice}</p>                                        
        </div>
    )    

    return (
        <Fragment>
            <CenteredItemsContainer backgroundImage={image} height="700px">
                <h2 className="text-color-white large-content-text">{name}</h2>
            </CenteredItemsContainer>      
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="recipe-page__content">
                            <Row>
                                <Col className="recipe-page__content-main" xs={12} md={8}>  
                                    <div className="recipe-page__content-main-block">
                                        <h2>Vontallen sallad</h2>
                                        <div className="line line--width-bold line--color-primary" />
                                        <div dangerouslySetInnerHTML={{__html: fullDescription.content}} />                                        
                                    </div>                                            
                                    <div className="recipe-page__content-main-block">
                                        <h3 className="text-color-primary">Ingredients</h3>                                        
                                        <div dangerouslySetInnerHTML={{__html: fullDescription.ingredients}} />
                                    </div>
                                    <div className="recipe-page__content-main-block">
                                        <h3 className="text-color-primary">Preparation</h3>                                        
                                        <div dangerouslySetInnerHTML={{__html: fullDescription.preparation.intro}} />                                        
                                        <Row>
                                            {
                                                fullDescription.preparation.steps.map((step, i) => (
                                                    <Col xs={12} md={6} key={i}>
                                                        <div dangerouslySetInnerHTML={{__html: step}} />
                                                    </Col>        
                                                ))
                                            }                                    
                                        </Row>
                                    </div>                                      
                                </Col>                        
                                <Col className="recipe-page__content-info" xs={12} md={4}>  
                                    <TeamMemberCard 
                                        className="recipe-page__content-info-block" 
                                        {...teamDB[authorID - 1]} 
                                        photoInfoLayout="horizontal" 
                                    />
                                    {advice ? renderAdviceBlock() : null}
                                    {
                                        stat.map((item, i) => 
                                            <ProcentageScale 
                                                className="recipe-page__content-info-block" 
                                                key={i} label={item.label} 
                                                value={item.value} 
                                            />
                                        )
                                    }
                                </Col>
                            </Row>
                        </div>            
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={9}>
                        <Comments                            
                            id={id}
                            comments={comments}
                            handleAddComment={handleAddComment} />
                    </Col>
                </Row>
            </Container>                
            <AllRecipesLink />
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    recipesDB: state.recipesState.recipesList,
    teamDB: state.teamState.teamList
})

export default connect(mapStateToProps)(RecipePage)