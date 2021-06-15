import React, { Fragment } from 'react'

import CenteredItemsContainer from '../Components/CenteredItemsContainer/CenteredItemsContainer'
import RecipesList from '../Components/RecipesList/RecipeList'
import Panel from '../RecipesPage/Panel/Panel'

const AllRecipesPage = () => {
    return (
        <Fragment>
            <CenteredItemsContainer backgroundImage="/img/home_diet_sectionbg4.jpg" height="200px">
                <h2 className="text--color-white slide-text">Blog</h2>
            </CenteredItemsContainer>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <RecipesList category="all" />
                    </div>
                </div>
            </div>
            <Panel className="margin-right--md margin-left--md" />
        </Fragment>
    )
}

export default AllRecipesPage