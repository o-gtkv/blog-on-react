import React, { Component } from 'react'

import './SearchForm.css'

class SearchForm extends Component {
    constructor(props) {
        super()        
    }    

    state = {
        value: ''
    }

    onChange = (e) => {
        this.setState({value: e.target.value})
    }

    onSublmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <form className={this.props.className + " search_form"} onSubmit={this.onSublmit}>
                <input 
                    className="search_form__control" 
                    type="text" 
                    value={this.state.value} 
                    placeholder="Enter your search" 
                    onChange={this.onChange} 
                />
            </form>
        )
    }
}

export default SearchForm