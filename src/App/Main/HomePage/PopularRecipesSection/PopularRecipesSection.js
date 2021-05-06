import React from 'react'
import RecipesCard from './RecipesCard/RecipesCard'

import './PopularRecipesSection.css'
import recipesDB from './recipesDB'

const PopularRecipesSection = () => {
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
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <RecipesCard {...recipesDB[0]} />
                        <RecipesCard {...recipesDB[1]} />
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <RecipesCard {...recipesDB[2]} />
                        <RecipesCard {...recipesDB[3]} />
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <RecipesCard {...recipesDB[4]} />
                        <RecipesCard {...recipesDB[5]} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularRecipesSection