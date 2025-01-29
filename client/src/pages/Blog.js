import React, { useState } from 'react';

import BlogHeader from '../components/BlogHeader';
import BlogList from './BlogList/BlogList';
import AddPostForm from '../components/AddPostForm';

import '../components/ContentContainer/ContentContainer.css';

// TODO: delete this old blog form

function Blog() {
    const [posts, setPosts] = useState([
        { title: 'First Post', content: 'This is my first blog post!' },
        { title: 'React is Awesome', content: 'React makes building UIs so much fun.' },
        { title: 'First Post', content: 'This is my first blog post!' },
        { title: 'React is Awesome', content: 'React makes building UIs so much fun.' },
        { title: 'First Post', content: 'This is my first blog post!' },
        { title: 'React is Awesome', content: 'React makes building UIs so much fun.' },
    ]);

    const addPost = (newPost) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]); // Add new post to the top of the list
    };

    return (
        <div className="contentContainer">
            <BlogHeader />
            <AddPostForm addPost={addPost} />
            <BlogList posts={posts} />
        </div>
    );
}


export default Blog;