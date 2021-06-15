import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import CenteredItemsContainer from '../Components/CenteredItemsContainer/CenteredItemsContainer'
import AllRecipesLink from '../Components/AllRecipesLink/AllRecipesLink'

import Comments from '../Components/Comments/Comments'
import TeamMemberCard from '../Components/TeamMemberCard/TeamMemberCard'
import ProcentageScale from './ProcentageScale/ProcentageScale'

import teamDB from '../../teamDB'

import './RecipePage.css'

const RecipePage = ({recipesDB, match, comments, handleAddComment}) => {
    if (recipesDB.length === 0)
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
            <h5 className="text--color-primary">Good advice</h5>
            <p className="text good-advice">{advice}</p>                                        
        </div>
    )    

    return (
        <Fragment>
            <CenteredItemsContainer backgroundImage={image} height="700px">
                <h2 className="text--color-white slide-text">{name}</h2>
            </CenteredItemsContainer>      
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="recipe-page__content">
                            <div className="row">                                                   
                                <div className="col-xs-12 col-md-8 recipe-page__content-main">                                     
                                    <div className="recipe-page__content-main-block">
                                        <h2 className="margin-top--md margin-bottom--md">Vontallen sallad</h2>
                                        <div className="line line--width-bold line--color-primary margin-bottom--md" />
                                        <div dangerouslySetInnerHTML={{__html: fullDescription.content}} />                                        
                                    </div>                                            
                                    <div className="recipe-page__content-main-block">
                                        <h3 className="text--color-primary margin-bottom--md">Ingredients</h3>                                        
                                        <div dangerouslySetInnerHTML={{__html: fullDescription.ingredients}} />
                                    </div>
                                    <div className="recipe-page__content-main-block">
                                        <h3 className="text--color-primary margin-bottom--md">Preparation</h3>                                        
                                        <div dangerouslySetInnerHTML={{__html: fullDescription.preparation.intro}} />                                        
                                        <div className="row">                                            
                                            {
                                                fullDescription.preparation.steps.map((step, i) => (
                                                    <div className="col-xs-12 col-md-6" key={i}>
                                                        <div dangerouslySetInnerHTML={{__html: step}} />
                                                    </div>        
                                                ))
                                            }                                    
                                        </div>
                                    </div>                                      
                                </div>                        
                                <div className="col-xs-12 col-md-4 recipe-page__content-info">                                
                                    <TeamMemberCard 
                                        className="recipe-page__content-info-block" 
                                        {...teamDB[authorID - 1]} 
                                        photoInfoLayout="horizontal" />
                                    {advice ? renderAdviceBlock() : null}
                                    {
                                        stat.map((item, i) => (
                                            <ProcentageScale 
                                                className="recipe-page__content-info-block" 
                                                key={i} label={item.label} 
                                                value={item.value} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>            
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-9">
                        <Comments 
                            className="margin-top--md margin-bottom--md"
                            id={id}
                            comments={comments}
                            handleAddComment={handleAddComment} />
                    </div>
                </div>
            </div>                
            <AllRecipesLink />
        </Fragment>
    )
}

const mapStateToProps = (state) => ({recipesDB: state.recipesState.recipesList})

export default connect(mapStateToProps)(RecipePage)