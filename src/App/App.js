import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { actionType } from '../redux/constants'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

import recipesDB from './recipesDB'
import articlesDB from './articlesDB'


class App extends Component {    
    constructor() {
        super()
        recipesDB.sort((recipe1, recipe2) => recipe1.category < recipe2.category)     
    }        

    componentDidMount() {        
        this.props.dispatch({
            type: actionType.LOAD_RECIPES,
            recipesList: recipesDB
        })
        this.props.dispatch({
            type: actionType.LOAD_ARTICLES,
            articlesList: articlesDB
        })
    }

    render() {
        return ( 
            <BrowserRouter>    
                <Header />
                <Main articlesDB={articlesDB} />
                <Footer />   
            </BrowserRouter>
        )
    }
}

export default connect()(App)