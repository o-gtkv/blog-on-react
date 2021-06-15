import React from 'react'
import { connect } from 'react-redux'

import ArticleCard from './ArticleCard/ArticleCard'

const ArticleList = ({articlesDB}) => {
    const itemsPerRow = 2
    const itemsPerCol = Math.floor(articlesDB.length / itemsPerRow)

    let k = 0;
    let h = articlesDB.length % itemsPerRow

    const articlesList = []
    for (let i = 0; i < itemsPerRow; ++i) {
        const articles = []
        for (let j = 0; j < itemsPerCol; ++j) {
            articles.push(<ArticleCard key={articlesDB[k].id} {...articlesDB[k++]}  />)
            if (h-- > 0) {
                articles.push(<ArticleCard key={articlesDB[k].id} {...articlesDB[k++]} />)
            }
        }
        articlesList.push(
            <div key={i} className="col-xs-12 col-md-6">
                {articles}
            </div>
        )
    }

    return (
        <div className="row">
            {articlesList}
        </div>
    )
}

const mapStateToProps = (state) => ({
    articlesDB: state.articlesState.articlesList
})

export default connect(mapStateToProps)(ArticleList)