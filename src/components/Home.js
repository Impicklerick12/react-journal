import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({entries}) => {
    return (
        <div>
            <h1>Home</h1>
            {entries.map((entry, index) => {
                return (
                    <div key={index.toString()}>
                        <h2>{entry.category}</h2>
                        <p>{entry.entry}</p>
                    </div>
                )
            })}
            <Link to='/category' ><button>Create New Entry</button></Link>
        </div>
    )
}

export default Home