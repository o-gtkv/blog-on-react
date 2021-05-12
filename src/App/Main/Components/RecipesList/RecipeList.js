import React from 'react'
import RecipesCard from './RecipesCard/RecipesCard'

const RecipesList = ({recipesDB, category}) => {    
    if (category === 'popular') {
        const maxCount = 6
        recipesDB = recipesDB.slice(0, Math.min(maxCount, recipesDB.length))
    } else if (category === 'breakfast') {
        recipesDB = recipesDB.filter(recipe => recipe.category === category)
    }

    const itemsPerRow = 3    
    const itemsPerCol = recipesDB.length / itemsPerRow + recipesDB.length % itemsPerRow
    let k = 0;
        
    const recipesList = []
    for (let i = 0; i < 3; ++i) {
        const recipes = []
        for (let j = 0; j < itemsPerCol; ++j) {
            recipes.push(<RecipesCard {...recipesDB[k++]} />)
        }
        recipesList.push(
            <div className="col-xs-12 col-md-4">
                {recipes}
            </div>
        )
    }

    return (
        <div className="row">            
            {recipesList}
        </div>
    )
}

export default RecipesList