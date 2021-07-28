import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import AboutUsPage from './AboutUsPage/AboutUsPage'
import ContactPage from './ContactPage/ContactPage'
import RecipesPage from './RecipesPage/RecipesPage'
import RecipePage from './RecipePage/RecipePage'
import AllRecipesPage from './AllRecipesPage/AllRecipesPage'

const Main = () => {
    const [comments, handleAddComment] = useState({})

    return (
        <main className="main">
            <Route exact path="/" render={() => <HomePage />} />
            <Route exact path="/about-us" component={AboutUsPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/breakfast" render={() => <RecipesPage category="Breakfast" />} />
            <Route exact path="/lunch" render={() => <RecipesPage category="Lunch" />} />
            <Route exact path="/dinner" render={() => <RecipesPage category="Dinner" />} />
            <Route exact path="/recipes/:id" 
                   render={({match}) => <RecipePage match={match} comments={comments} handleAddComment={handleAddComment} />} />
            <Route exact path="/all-recipes" render={() => <AllRecipesPage />} />
        </main>
    )
}


export default Main