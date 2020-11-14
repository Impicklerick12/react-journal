import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    const divStyles = {
        display: 'flex',
    }

    const linkStyles = {
        fontSize: '1.2em',
        margin: '.5em',
        color: 'purple'
    }

    return (
        <div style={divStyles}>
            <Link style={linkStyles} to="/blog">Home</Link>
            <Link style={linkStyles} to="/blog/posts/new">Add a post</Link>
        </div>
    )
}

export default Nav
