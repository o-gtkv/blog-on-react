import React from 'react'
import RecipesList from '../../Components/RecipesList/RecipeList'

import './PopularRecipesSection.css'

const PopularRecipesSection = ({recipesDB}) => {
    return (
        <section className="popular-recipes">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="popular-recipes__header">
                            <span className="popular-recipes__header-text">The most popular recipes</span>
                        </div>
                    </div>                    
                </div>                                
                <RecipesList recipesDB={recipesDB} category={'breakfast'} />                    
            </div>
        </section>
    )
}

export default PopularRecipesSection