import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import AboutUsPage from './AboutUsPage/AboutUsPage'
import ContactPage from './ContactPage/ContactPage'
import RecipesPage from './RecipesPage/RecipesPage'
import RecipePage from './RecipePage/RecipePage'
import AllRecipesPage from './AllRecipesPage/AllRecipesPage'

import commentsDB from '../commentsDB' 

const Main = () => {
    const [comments, handleAddComment] = useState(commentsDB)

    const routesProps = [
        {exact: true, path: "/", component: HomePage},        
        {exact: true, path: "/about-us", component: AboutUsPage},
        {exact: true, path: "/contact", component: ContactPage},
        {exact: true, path: "/breakfast", render: () => <RecipesPage category="Breakfast" />},
        {exact: true, path: "/lunch", render: () => <RecipesPage category="Lunch" />},
        {exact: true, path: "/dinner", render: () => <RecipesPage category="Dinner" />},
        {exact: true, path: "/recipes/:id", render: ({match}) => <RecipePage match={match} comments={comments} handleAddComment={handleAddComment} />},        
        {exact: true, path: "/all-recipes", render: () => <AllRecipesPage />},
    ]

    return (
        <main className="main">
            <Switch>
                {
                    routesProps.map((routeProps, i) => 
                        <Route key={i} {...routeProps} />
                    )
                }
                <Redirect to='/' />
            </Switch>
        </main>
    )
}


export default Main