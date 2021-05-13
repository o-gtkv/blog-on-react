import React, { Fragment } from 'react'

import SearchForm from '../../SearchForm/SearchForm'

import './Panel.css'

const Panel = () => {
    return (
        <div className="panel">
            <SearchForm className="panel__child" />            
        </div>
    )
}

export default Panel