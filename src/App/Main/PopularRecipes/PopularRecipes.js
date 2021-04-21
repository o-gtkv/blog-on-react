import React from 'react'
import RecipesCard from './RecipesCard/RecipesCard'

import './PopularRecipes.css'

const PopularRecipes = () => {
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
                        <RecipesCard />
                        <RecipesCard />
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <RecipesCard />
                        <RecipesCard />
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <RecipesCard />
                        <RecipesCard />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularRecipes