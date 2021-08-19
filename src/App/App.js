import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { actionType } from '../redux/constants'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

import recipesDB from './recipesDB'
import articlesDB from './articlesDB'
import teamDB from './teamDB'
import ScrollToTop from './Main/Components/ScrollToTop/ScrollToTop'

const App = (props) => {        
    useEffect(() => {
        props.dispatch({
            type: actionType.LOAD_RECIPES,
            recipesList: recipesDB
        })

        props.dispatch({
            type: actionType.LOAD_ARTICLES,
            articlesList: articlesDB
        })

        props.dispatch({
            type: actionType.LOAD_TEAM,
            teamList: teamDB
        })  
    }, [])
    
    return (             
        <BrowserRouter>         
            <ScrollToTop />
            <Header />                       
            <Main />
            <Footer />  
        </BrowserRouter>                            
    )
}

export default connect()(App)