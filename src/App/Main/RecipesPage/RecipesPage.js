import React from 'react'
import { connect } from 'react-redux'

import CenteredItemsContainer from '../Components/CenteredItemsContainer/CenteredItemsContainer'
import RecipesList from '../Components/RecipesList/RecipeList'
import Panel from './Panel/Panel'

import './RecipesPage.css'

const RecipesPage = ({category}) => {        
    return (
        <div className="recipes-page">
            <CenteredItemsContainer backgroundImage="/img/home_diet_sectionbg4.jpg" height="200px">
                <h2 className="text-color-white large-content-text">{category}</h2>
            </CenteredItemsContainer>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <RecipesList category={category} />
                    </div>
                </div>
            </div>
            <Panel />
        </div>
    )
}

const mapStateToProps = (state) => ({recipesDB: state.recipesState.recipesList})

export default connect(mapStateToProps)(RecipesPage)