import React from 'react'

import './SearchForm.css'

const SearchForm = ({className}) => {
    return (
        <form className={className + " search_form"}>
            <input className="search_form__control" type="text" value="" placeholder="Enter your search" />
        </form>
    )
}

export default SearchForm