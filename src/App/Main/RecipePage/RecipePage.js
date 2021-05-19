import React, { Fragment } from 'react'

import CenteredItemsContainer from '../Components/CenteredItemsContainer/CenteredItemsContainer'
import AllRecipesLink from '../Components/AllRecipesLink/AllRecipesLink'
// import Panel from '..   /Components/Panel/Panel'

import './RecipePage.css'

const RecipePage = ({recipesDB, match}) => {
    const {image, name} = {...recipesDB.find(recipe => recipe.id === Number(match.params.id))}
    
    return (
        <Fragment>
            <CenteredItemsContainer backgroundImage={image} height="700px">
                <h2 className="text--color-white slide-text">{name}</h2>
            </CenteredItemsContainer>      
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="recipe-page__content">
                            <div className="row">                                                   
                                <div className="col-xs-12 col-md-9 recipe-page__content-main">                                     
                                    <div className="recipe-page__content-main-block">
                                        <h2 className="margin-top--md margin-bottom--md">Vontallen sallad</h2>
                                        <div className="line line--width-bold line--color-primary margin-bottom--md" />
                                        <p className="text">
                                            Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. 
                                            Curabitur ut egestas justo, vitae molestie ante. Integer magna purus, commodo in diam nec, pretium auctor sapien. 
                                            In pulvinar, ipsum eu dignissim facilisis, massa justo varius purus, non dictum elit nibh ut massa. Nam massa erat, 
                                            aliquet a rutrum eu, sagittis ac nibh. Pellentesque velit dolor, suscipit in ligula a, suscipit rhoncus dui.
                                        </p>
                                    </div>                                            
                                    <div className="recipe-page__content-main-block">
                                        <h3 className="text--color-primary margin-bottom--md">Ingredients</h3>
                                        <ul className="ingredients-list">
                                            <li>1 x lorem ipsum</li>
                                            <li>200g sit amet</li>
                                            <li>1,5l consectetur</li>
                                            <li>1,5l consectetur</li>
                                            <li>4 adipisicing</li>
                                            <li>elit and tempor</li>
                                        </ul>
                                    </div>
                                    <div className="recipe-page__content-main-block">
                                        <h3 className="text--color-primary margin-bottom--md">Preparation</h3>
                                        <p className="text">
                                            Vivamus in diam turpis. In condimentum maximus tristique. 
                                            Maecenas non laoreet odio. Fusce lobortis porttitor purus, vel vestibulum libero pharetra vel.                             
                                        </p>
                                        <div className="row">
                                            <div className="col-xs-12 col-md-6">
                                                <img src="/img/recipes/home_diet_blogdetails2.jpg" alt="" />
                                                <h4 className="text--color-primary margin-top--md">Step 1</h4>
                                                <p className="text">
                                                    Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. 
                                                    Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit.
                                                </p>
                                            </div>
                                            <div className="col-xs-12 col-md-6">
                                                <img src="/img/recipes/home_diet_blogdetails3.jpg" alt="" />
                                                <h4 className="text--color-primary margin-top--md">Step 2</h4>
                                                <p className="text">
                                                    Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. 
                                                    Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit.
                                                </p>                                                
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-md-6">
                                                <img src="/img/recipes/home_diet_blogdetails4.jpg" alt="" />
                                                <h4 className="text--color-primary margin-top--md">Step 3</h4>
                                                <p className="text">
                                                    Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. 
                                                    Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit.
                                                </p>                                                
                                            </div>
                                            <div className="col-xs-12 col-md-6">
                                                <img src="/img/recipes/home_diet_blogdetails5.jpg" alt="" />                                                    
                                                <h4 className="text--color-primary margin-top--md">Step 4</h4>
                                                <p className="text">
                                                    Duis dignissim mi ut laoreet mollis. Nunc id tellus finibus, eleifend mi vel, maximus justo. 
                                                    Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas ultrices tellus sit.
                                                </p>                                                
                                            </div>
                                        </div>
                                    </div>                                      
                                </div>                        
                                <div className="col-xs-12 col-md-3 recipe-page__content-info">                                
                                    asd                                
                                </div>
                            </div>                            
                        </div>                    
                    </div>
                </div>
            </div>
            <AllRecipesLink />
        </Fragment>
    )
}

export default RecipePage