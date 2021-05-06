import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {
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

export default App;