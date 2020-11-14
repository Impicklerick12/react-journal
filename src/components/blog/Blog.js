import React,{ useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import blogData from '../../data/post-data'
import BlogPost from './BlogPost'
import BlogPosts from './BlogPosts'
import NewBlogPost from './NewBlogPost'
import EditBlogPost from './EditBlogPost'
import Nav from './Nav'

const Blog = () => {

    const [blogPosts, setBlogPosts] = useState([])

    useEffect(() => {
        setBlogPosts(blogData)
    }, [])

    const getPostFromId = (id) => {
        return blogPosts.find((post) => post._id === parseInt(id))
    }

    const nextId = () => {
        return blogPosts.reduce((acc, cur) => acc._id > cur._id ? acc : cur, {_id: 0})._id + 1
    }

    const addBlogPost = (post) => {
        setBlogPosts([...blogPosts, post])
    }

    const deleteBlogPost = (id) => {
        const updatedPosts = blogPosts.filter((post) => post._id !== parseInt(id))
        setBlogPosts(updatedPosts)
    }

    // Update a post to blogPosts
    function updateBlogPost(updatedPost) {
        const otherPosts = blogPosts.filter((post) => post._id !== updatedPost._id)
        setBlogPosts([...otherPosts, updatedPost])
    }

    return (
        <BrowserRouter>
            <Nav />
            <Route exact path="/blog/posts/:id" render={(props) =>
                <BlogPost {...props} post={getPostFromId(props.match.params.id)} 
                    showControls deleteBlogPost={deleteBlogPost}
                />
            } />
            <Route exact path="/blog" render={(props) => <BlogPosts {...props} postsData={blogPosts} />} />
            <Route exact path="/blog/posts/new" render={props => <NewBlogPost {...props} addBlogPost={addBlogPost} nextId={nextId()} />} />
            <Route exact path="/blog/posts/edit/:id" render={(props) => <EditBlogPost {...props} updateBlogPost={updateBlogPost} post={getPostFromId(props.match.params.id)}/> }/>
        </BrowserRouter>
    )
}

export default Blog