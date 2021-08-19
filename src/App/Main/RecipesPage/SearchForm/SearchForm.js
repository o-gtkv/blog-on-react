import React, { useState } from 'react'

import './SearchForm.css'

const SearchForm = (props) => {
    const [value, setValue] = useState('')

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setValue('')
        console.log('Not implemented yet.');
    }

    return (
        <form className={`search-form ${props.className}`} onSubmit={handleSubmit}>
            <input 
                className="search-form__control" 
                type="text" 
                value={value} 
                placeholder="Enter your search"
                name="search" 
                onChange={handleChange} 
            />
        </form>
    )
}

export default SearchForm