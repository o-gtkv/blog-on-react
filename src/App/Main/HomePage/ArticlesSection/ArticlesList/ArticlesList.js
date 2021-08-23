import React, { useMemo } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import ArticleCard from './ArticleCard/ArticleCard'

function makeArticlesList(articlesDB) {
    if (!articlesDB.length)
        return null

    const itemsPerRow = 2
    const itemsPerCol = Math.floor(articlesDB.length / itemsPerRow)

    let k = 0;
    let h = articlesDB.length % itemsPerRow    

    const articlesList = []
    for (let i = 0; i < itemsPerRow; ++i) {
        const articles = []
        for (let j = 0; j < itemsPerCol; ++j) {
            // console.log(k++);
            articles.push(<ArticleCard key={articlesDB[k].id} {...articlesDB[k]}  />)
            ++k            
            if (h-- > 0) {
                articles.push(<ArticleCard key={articlesDB[k].id} {...articlesDB[k]} />)
                ++k
            }
        }
        articlesList.push(
            <Col key={i} xs={12} md={6}>
                {articles}
            </Col>
        )
    } 

    return articlesList

}

const ArticleList = ({articlesDB}) => {    
    const articlesList = useMemo(() => makeArticlesList(articlesDB), [articlesDB])

    return (
        <Row>
            {articlesList}
        </Row>
    )
}

const mapStateToProps = (state) => ({
    articlesDB: state.articlesState.articlesList
})

export default connect(mapStateToProps)(ArticleList)