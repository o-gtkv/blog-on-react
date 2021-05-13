import React from 'react'

import SearchForm from '../../SearchForm/SearchForm'
import CategoryList from '../CategoryList/CategoryList'

import './Panel.css'

const Panel = ({className=''}) => {
    return (
        <div className={"panel " + className}>
            <SearchForm className="panel__child" />
            <div className="panel__child">
                <div>
                    <h5 className="margin-bottom--md">About us</h5>
                    <p className="text">Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat.</p>
                </div>
            </div>
            <div className="panel__child">
                <div>
                    <h5 className="margin-bottom--md">Recent posts</h5>
                    <div>post1</div>
                    <div>post2</div>
                </div>
            </div>
            <div className="panel__child">
                <div>
                    <h5 className="margin-bottom--md">Categories</h5>
                    <CategoryList />
                </div>
            </div>
        </div>
    )
}

export default Panel