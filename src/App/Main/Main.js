import React from 'react'

import Slider from './Slider/Slider'
import PopularRecipes from './PopularRecipes/PopularRecipes'
import AllRecipes from './AllRecipes/AllRecipes'
import Articles from './Articles/Articles'
import AboutUs from './AboutUs/AboutUs'

const Main = () => {    
    return (
        <main className="main">
            <Slider backgroundImage="/img/home_diet_sectionbg1.jpg">                
                <div className="slide-text">
                    Welcome to the place full of healthy food and ideas to keep you fit                                    
                </div>                                            
            </Slider>
            <PopularRecipes />
            <AllRecipes />
            <Slider backgroundImage="/img/home_diet_sectionbg2.jpg">
                <div class="slide-text">                                                                                
                    Red meat is a good source of protein, iron, vitamin B, riboflavin, thiamin and niacin.
                </div>
            </Slider>
            <Articles />
            <AboutUs />
        </main>
    )    
}

export default Main