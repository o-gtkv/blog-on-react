import React, { Fragment } from 'react'

import Slider from './Slider/Slider'
import PopularRecipesSection from './PopularRecipesSection/PopularRecipesSection'
import ArticlesSection from './ArticlesSection/ArticlesSection'
import AboutUsSection from './AboutUsSection/AboutUsSection'
import AllRecipesLink from '../Components/AllRecipesLink/AllRecipesLink'

const HomePage = () => {
    return (
        <>
            <Slider backgroundImage="/img/bg/slider1.jpg" height="800px">
                <div className="large-content-text">
                    Welcome to the place full of healthy food and ideas to keep you fit
                </div>
            </Slider>
            <PopularRecipesSection />
            <AllRecipesLink />
            <Slider backgroundImage="/img/bg/slider2.jpg" height={"800px"}>
                <>
                    <div>
                        <img src="/img/blockquote.png" alt="" />
                    </div>
                    <div className="large-content-text">
                        Red meat is a good source of protein, iron, vitamin B, riboflavin, thiamin and niacin.
                    </div>
                </>
            </Slider>
            <ArticlesSection />
            <AboutUsSection />
        </>
    )
}

export default HomePage