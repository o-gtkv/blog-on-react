import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

import recipesDB from './recipesDB'

class App extends Component {    

    constructor() {
        super()
        recipesDB.sort((recipe1, recipe2) => recipe1.category < recipe2.category)     
    }        

    render() {
        return ( 
            <BrowserRouter>    
                <Header />
                <Main recipesDB={recipesDB}/>    
                <Footer />            
            </BrowserRouter>
        )
    }
}

export default App;