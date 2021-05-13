import React from 'react'
import { Link } from 'react-router-dom'

import './CategoryList.css'

const CategoryList = () => {
    const categories = ['Breakast', 'Lunch', 'Dinner']
    return (
        <ul className="category-list">
            {
                categories.map(item => (
                    <li className="category-list__item">
                        <Link className="category-list__item-link" to="">{item}</Link>
                    </li>
                ))
            }
        </ul>        
    )    
}

export default CategoryList
