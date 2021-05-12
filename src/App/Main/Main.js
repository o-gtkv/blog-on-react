import React from 'react'
import { Route } from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import AboutUsPage from './AboutUsPage/AboutUsPage'
import ContactPage from './ContactPage/ContactPage'

const Main = ({recipesDB}) => {    

    return (
        <main className="main">
            <Route exact path="/" render={() => <HomePage recipesDB={recipesDB} />} />
            <Route exact path="/about-us" component={AboutUsPage} />
            <Route exact path="/contact" component={ContactPage} />            
        </main>
    )    
}

export default Main