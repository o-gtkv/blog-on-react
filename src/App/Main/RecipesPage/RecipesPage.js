import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import CenteredItemsContainer from '../Components/CenteredItemsContainer/CenteredItemsContainer'
import RecipesList from '../Components/RecipesList/RecipeList'
import Panel from './Panel/Panel'

const RecipesPage = ({category}) => {
    return (
        <Fragment>
            <CenteredItemsContainer backgroundImage="/img/home_diet_sectionbg4.jpg" height="200px">
                <h2 className="text--color-white slide-text">{category}</h2>
            </CenteredItemsContainer>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <RecipesList category={category} />
                    </div>
                </div>
            </div>
            <Panel className="margin-right--md margin-left--md" />
        </Fragment>
    )
}

const mapStateToProps = (state) => ({recipesDB: state.recipesState.recipesList})

export default connect(mapStateToProps)(RecipesPage)