import React from 'react'
// import ArticleCard from './ArticlesList/ArticleCard/ArticleCard'
import ArticlesList from './ArticlesList/ArticlesList'

import './ArticlesSection.css'

const ArticlesSection = ({articlesDB}) => {
    return (
        <section className="articles">
            <div className="container">
                <div className="row">
                    <ArticlesList articlesDB={articlesDB} />
                    {/* {
                        articlesDB.map((articleData, i) => (
                            <div className="col-xs-12 col-md-6" key={i}>
                                <ArticleCard {...articleData} />
                            </div>                    
                        ))           
                    }          */}
                </div>
            </div>
        </section>
    )
}

export default ArticlesSection