import React from 'react'
import ArticlesList from './ArticlesList/ArticlesList'

import './ArticlesSection.css'

const ArticlesSection = () => {
    return (
        <section className="articles">
            <div className="container">
                <div className="row">
                    <ArticlesList />
                </div>
            </div>
        </section>
    )
}

export default ArticlesSection