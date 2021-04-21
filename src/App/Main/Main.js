import React from 'react'

import Slider from './Slider/Slider'
import PopularRecipes from './PopularRecipes/PopularRecipes'

const Main = () => {    
    return (
        <main className="main">
            <Slider />
            <PopularRecipes />
        </main>
    )                
}

export default Main