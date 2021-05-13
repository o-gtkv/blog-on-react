import React, { Fragment } from 'react'
import CenteredItemsContainer from '../Components/CenteredItemsContainer/CenteredItemsContainer'
import RecipesList from '../Components/RecipesList/RecipeList'
import Panel from './Panel/Panel'

const RecipesPage = ({recipesDB}) => {
    return (
        <Fragment>
            <CenteredItemsContainer backgroundImage="/img/home_diet_sectionbg4.jpg" height="200px">
                <h2 className="text--color-white slide-text">Breakfast</h2>
            </CenteredItemsContainer>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <RecipesList recipesDB={recipesDB} category="breakfast" />
                    </div>
                </div>
            </div>
            <Panel />
        </Fragment>
    )
}

export default RecipesPage