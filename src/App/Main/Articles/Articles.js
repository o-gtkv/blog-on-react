import React from 'react'
import ArticleCard from './ArticleCard/ArticleCard'

import './Articles.css'

const Articles = () => {
    return (
        <section className="articles">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <ArticleCard />
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <ArticleCard />
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <ArticleCard />
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <ArticleCard />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles