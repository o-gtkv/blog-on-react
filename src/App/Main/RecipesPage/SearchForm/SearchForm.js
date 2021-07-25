import React, { Component } from 'react'

import './SearchForm.css'

class SearchForm extends Component {
    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({value: ''})
        console.log('Not implemented yet.');
    }

    render() {
        return (
            <form className={`search-form ${this.props.className}`} onSubmit={this.handleSubmit}>
                <input 
                    className="search-form__control" 
                    type="text" 
                    value={this.state.value} 
                    placeholder="Enter your search"
                    name="search" 
                    onChange={this.handleChange} />
            </form>
        )
    }
}

export default SearchForm