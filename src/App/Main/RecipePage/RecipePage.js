import React, { Fragment } from 'react'

import CenteredItemsContainer from '../Components/CenteredItemsContainer/CenteredItemsContainer'
import AllRecipesLink from '../Components/AllRecipesLink/AllRecipesLink'

import Comments from '../Components/Comments/Comments'
import TeamMemberCard from '../Components/TeamMemberCard/TeamMemberCard'
import ProcentageScale from './ProcentageScale/ProcentageScale'

import teamDB from '../../teamDB'

import './RecipePage.css'

const RecipePage = ({recipesDB, match, comments, newComment}) => {
    const {id, authorID, image, name, fullDescription} = {...recipesDB.find(recipe => recipe.id === Number(match.params.id))}
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
                                        <p className="text">{fullDescription.content}</p>
                                    </div>                                            
                                    <div className="recipe-page__content-main-block">
                                        <h3 className="text--color-primary margin-bottom--md">Ingredients</h3>                                        
                                        <ul className="ingredients-list">
                                            {
                                                fullDescription.ingredients.map((ingredient, i) => (
                                                    <li key={i}>{ingredient}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className="recipe-page__content-main-block">
                                        <h3 className="text--color-primary margin-bottom--md">Preparation</h3>
                                        <p className="text">{fullDescription.preparation.text}</p>
                                        <div className="row">
                                            {
                                                fullDescription.preparation.steps.map((step, i) => (
                                                    <div className="col-xs-12 col-md-6" key={i}>
                                                        <img src={step.img} alt="" />
                                                        <h4 className="text--color-primary margin-top--md">Step {i + 1}</h4>
                                                        <p className="text">{step.desc}</p> 
                                                    </div>        
                                                ))
                                            }                                    
                                        </div>
                                    </div>                                      
                                </div>                        
                                <div className="col-xs-12 col-md-4 recipe-page__content-info">                                
                                    <TeamMemberCard className="recipe-page__content-info-block" {...teamDB[authorID - 1]} photoInfoLayout="horizontal" />
                                    <div className="recipe-page__content-info-block">
                                        <h5 className="text--color-primary">Good advice</h5>
                                        <p className="text good-advice">{fullDescription.advice}</p>                                        
                                    </div>
                                    <ProcentageScale className="recipe-page__content-info-block" label="Aliquam erat ac" value={70} />
                                    <ProcentageScale className="recipe-page__content-info-block" label="Quisque lorem tortor" value={50} />
                                    <ProcentageScale className="recipe-page__content-info-block" label="Curabitur et ligula" value={20} />
                                </div>
                            </div>                            
                        </div>                    
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-9">
                        <Comments className="margin-top--md margin-bottom--md" id={id} comments={comments} newComment={newComment} />                                            
                    </div>
                </div>                
            </div>                    
            <AllRecipesLink />
        </Fragment>
    )
}

export default RecipePage