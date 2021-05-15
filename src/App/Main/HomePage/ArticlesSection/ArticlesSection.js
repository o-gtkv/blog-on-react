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
                </div>
            </div>
        </section>
    )
}

export default ArticlesSection