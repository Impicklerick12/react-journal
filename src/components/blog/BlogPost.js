import React from 'react'
import { Link } from 'react-router-dom'

const BlogPost = ({history, post, showControls, deleteBlogPost}) => {

    // If we dont have a post, return null
    if (!post) {
        return null
    } else {
        const linkStyles = {
            color: 'green' 
        }

        const {title, modified_date, category, content} = post

        // handle the delete button
        const handleDelete = (e) => {
            e.preventDefault()
            deleteBlogPost(post._id)
            history.push('/blog')
        }

        // handle the edit button
        const handleEdit = (e) => {
            e.preventDefault()
            history.push(`/blog/posts/edit/${post._id}`)
        }

        return (

            <div>
                <Link style={linkStyles} to={`blog/posts/${post._id}`}>
                    <h1>{title}</h1>
                </Link>
                <h3>{category}</h3>
                <h3>{modified_date.toLocaleString()}</h3>
                <p>{content}</p>
                { showControls && (
                    <div>
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                )}
            </div>
        )
    }
}

export default BlogPost