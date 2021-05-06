import React from 'react'
import ArticleCard from './ArticleCard/ArticleCard'

import './ArticlesSection.css'
import articlesDB from './articlesDB'

const ArticlesSection = () => {        
    return (
        <section className="articles">
            <div className="container">
                <div className="row">
                    {
                        articlesDB.map((articleData, i) => (
                            <div className="col-xs-12 col-md-6" key={i}>
                                <ArticleCard {...articleData} />
                            </div>                    
                        ))           
                    }         
                </div>
            </div>
        </section>
    )
}

export default ArticlesSection