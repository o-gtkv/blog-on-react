import React from 'react'
import { Link } from 'react-router-dom'

import './CategoryList.css'

const CategoryList = () => {
    const categories = ['Breakfast', 'Lunch', 'Dinner']
    return (
        <ul className="category-list">
            {
                categories.map((item, i) => (
                    <li className="category-list__item" key={i}>
                        <Link className="category-list__item-link" to={`/${item.toLowerCase()}`}>{item}</Link>
                    </li>
                ))
            }
        </ul>        
    )    
}

export default CategoryList
