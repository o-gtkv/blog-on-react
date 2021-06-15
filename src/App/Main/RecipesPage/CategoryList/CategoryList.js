import React from 'react'
import { Link } from 'react-router-dom'

import './CategoryList.css'

// TODO: make global constants 'Breakfast', 'Lunch', 'Dinner'

const CategoryList = () => {
    const categories = ['Breakfast', 'Lunch', 'Dinner']
    return (
        <ul className="category-list">
            {
                categories.map((categoryName, i) => (
                    <li className="category-list__item" key={i}>
                        <Link className="category-list__item-link" to={`/${categoryName.toLowerCase()}`}>{categoryName}</Link>
                    </li>
                ))
            }
        </ul>        
    )    
}

export default CategoryList
