import React, { Fragment } from 'react'

import Slider from './Slider/Slider'
import PopularRecipesSection from './PopularRecipesSection/PopularRecipesSection'
import ArticlesSection from './ArticlesSection/ArticlesSection'
import AboutUsSection from './AboutUsSection/AboutUsSection'
import AllRecipesLink from '../Components/AllRecipesLink/AllRecipesLink'

const HomePage = ({recipesDB, articlesDB}) => {
    return (
        <Fragment>
            <Slider backgroundImage="/img/bg/slider1.jpg" height="800px">
                <div className="slide-text">
                    Welcome to the place full of healthy food and ideas to keep you fit
                </div>
            </Slider>
            <PopularRecipesSection recipesDB={recipesDB}/>
            <AllRecipesLink />
            <Slider backgroundImage="/img/bg/slider2.jpg" height={"800px"}>
                <Fragment>
                    <div>
                        <img src="/img/blockquote.png" alt="" />
                    </div>
                    <div className="slide-text">
                        Red meat is a good source of protein, iron, vitamin B, riboflavin, thiamin and niacin.
                    </div>
                </Fragment>
            </Slider>
            <ArticlesSection articlesDB={articlesDB} />
            <AboutUsSection />
        </Fragment>
    )
}

export default HomePage