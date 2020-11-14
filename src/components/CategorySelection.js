import React from 'react'
import { Link } from 'react-router-dom'

const CategorySelection = ({categories}) => {

    return (
        <div>
            <h1>What type of entry do you want?</h1>
            <ul>
                {categories.map((item, index) => {
                    return (
                        <li key={index.toString()}><Link to={`/entry/new/${index}`}>{item}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CategorySelection
