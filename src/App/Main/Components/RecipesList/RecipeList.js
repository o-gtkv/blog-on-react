import React, { useMemo } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import RecipesCard from './RecipesCard/RecipesCard'

import './RecipeList.css'

function makeRecipesList(recipesDB, category) {
    if (!recipesDB.length)
        return null

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
            recipes.push(<RecipesCard key={recipesDB[k].id} {...recipesDB[k]} />)
            ++k
            if (h-- > 0) {
                recipes.push(<RecipesCard key={recipesDB[k].id} {...recipesDB[k]} />)
                ++k
            }
        }
        recipesList.push(
            <Col key={i} xs={12} md={4}>
                {recipes}
            </Col>
        )
    }

    return recipesList
}

const RecipesList = ({recipesDB, category}) => {        
    const recipesList = useMemo(() => makeRecipesList(recipesDB, category), [recipesDB])
    return (
        <Row className="recipes-list">
            {recipesList}
        </Row>
    )    
}

const mapStateToProps = (state) => ({recipesDB: state.recipesState.recipesList})

export default connect(mapStateToProps)(RecipesList)

