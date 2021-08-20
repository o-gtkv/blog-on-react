import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ArticlesList from './ArticlesList/ArticlesList'

import './ArticlesSection.css'

const ArticlesSection = () => {
    return (
        <section className="articles">
            <Container>
                <Row>
                    <ArticlesList />
                </Row>
            </Container>
        </section>
    )
}

export default ArticlesSection