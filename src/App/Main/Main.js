import React from 'react'
import { Route } from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import AboutUsPage from './AboutUsPage/AboutUsPage'
import ContactPage from './ContactPage/ContactPage'
import RecipesPage from './RecipesPage/RecipesPage'

const Main = ({recipesDB}) => {    
    return (
        <main className="main">
            <Route exact path="/" render={() => <HomePage recipesDB={recipesDB} />} />
            <Route exact path="/about-us" component={AboutUsPage} />
            <Route exact path="/contact" component={ContactPage} />            
            <Route exact path="/breakfast" render={() => <RecipesPage category="Breakfast" recipesDB={recipesDB} />} />
            <Route exact path="/lunch" render={() => <RecipesPage category="Lunch" recipesDB={recipesDB} />} />
            <Route exact path="/dinner" render={() => <RecipesPage category="Dinner" recipesDB={recipesDB} />} />
        </main>
    )    
}

export default Main