import React from 'react'
import { connect } from 'react-redux'

import RecipesCard from './RecipesCard/RecipesCard'

import './RecipeList.css'

const RecipesList = ({recipesDB, category}) => {    
    if (category === 'popular') {
        const maxCount = 6
        recipesDB = recipesDB.slice(0, Math.min(maxCount, recipesDB.length))
    } else if (category !== 'all') {
        recipesDB = recipesDB.filter(recipe => recipe.category === category.toLowerCase())
    }    

    const itemsPerRow = Math.min(recipesDB.length, 3)
    const itemsPerCol = Math.floor(recipesDB.length / itemsPerRow)

    let k = 0;
    let h = recipesDB.length % itemsPerRow

    const recipesList = []
    for (let i = 0; i < itemsPerRow; ++i) {
        const recipes = []
        for (let j = 0; j < itemsPerCol; ++j) {
            recipes.push(<RecipesCard key={recipesDB[k].id} {...recipesDB[k++]} />)
            if (h-- > 0) {
                recipes.push(<RecipesCard key={recipesDB[k].id} {...recipesDB[k++]} />)
            }
        }
        recipesList.push(
            <div key={i} className="col-xs-12 col-md-4">
                {recipes}
            </div>
        )
    }

    return (
        <div className="row recipes-list">
            {recipesList}
        </div>
    )
}

const mapStateToProps = (state) => ({recipesDB: state.recipesState.recipesList})

export default connect(mapStateToProps)(RecipesList)

