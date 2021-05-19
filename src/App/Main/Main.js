import React from 'react'
import { Route } from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import AboutUsPage from './AboutUsPage/AboutUsPage'
import ContactPage from './ContactPage/ContactPage'
import RecipesPage from './RecipesPage/RecipesPage'
import RecipePage from './RecipePage/RecipePage'

const Main = ({recipesDB, articlesDB}) => {    
    return (
        <main className="main">
            <Route exact path="/" render={() => <HomePage recipesDB={recipesDB} articlesDB={articlesDB} />} />
            <Route exact path="/about-us" component={AboutUsPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/breakfast" render={() => <RecipesPage category="Breakfast" recipesDB={recipesDB} />} />
            <Route exact path="/lunch" render={() => <RecipesPage category="Lunch" recipesDB={recipesDB} />} />
            <Route exact path="/dinner" render={() => <RecipesPage category="Dinner" recipesDB={recipesDB} />} />
            <Route exact path="/recipes/:id" render={({match}) => <RecipePage recipesDB={recipesDB} match={match} />} />
            {/* <Route exact path="/recipes/:id" component={RecipePage} /> */}
        </main>
    )
}

export default Main