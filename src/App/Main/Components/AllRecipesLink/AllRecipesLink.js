import React from 'react'
import { Link } from 'react-router-dom'

import './AllRecipesLink.css'

const AllRecipesLink = () => {
    return (
        <section className="all-recipes">
            <Link to="/all-recipes" className="all-recipes__link">View all cooking recipes →</Link>
        </section>
    )
}

export default AllRecipesLink