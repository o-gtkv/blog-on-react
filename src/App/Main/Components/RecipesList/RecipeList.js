import React from 'react'
import RecipesCard from './RecipesCard/RecipesCard'

const RecipesList = ({recipesDB, category}) => {    
    if (category === 'popular') {
        const maxCount = 6
        recipesDB = recipesDB.slice(0, Math.min(maxCount, recipesDB.length))
    } else {
        recipesDB = recipesDB.filter(recipe => recipe.category === category.toLowerCase())
    }

    const itemsPerRow = 3    
    const itemsPerCol = Math.floor(recipesDB.length / itemsPerRow)

    // const table = []
    // for (let i = 0; i < itemsPerRow; ++i) {
    //     table.push(<div id={"row" + i} className="col-xs-12 col-md-4"></div>)
    // }

    // let k = recipesDB.length
    // while (k > 0) {
    //     for (let i = 0; i < itemsPerRow && k > 0; ++i) {
    //         const row = document.getElementById('row' + i)
    //         row.innerHTML = row.innerHTML + recipesDB[--k]
    //     }
    // }

    let k = 0;            
    let h = recipesDB.length % itemsPerRow

    const recipesList = []
    for (let i = 0; i < itemsPerRow; ++i) {
        const recipes = []
        for (let j = 0; j < itemsPerCol; ++j) {
            recipes.push(<RecipesCard key={recipesDB[k].id} {...recipesDB[k++]}  />)
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
        <div className="row">            
            {recipesList}
        </div>
    )
}

export default RecipesList

