import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { actionType } from '../redux/constants'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

import recipesDB from './recipesDB'
import articlesDB from './articlesDB'
import teamDB from './teamDB'

class App extends Component {    
    componentDidMount() {
        this.props.dispatch({
            type: actionType.LOAD_RECIPES,
            recipesList: recipesDB
        })

        this.props.dispatch({
            type: actionType.LOAD_ARTICLES,
            articlesList: articlesDB
        })

        this.props.dispatch({
            type: actionType.LOAD_TEAM,
            teamList: teamDB
        })
        
    }

    render() {
        return ( 
            <BrowserRouter>    
                <Header />
                <Main />
                <Footer />   
            </BrowserRouter>
        )
    }
}

export default connect()(App)