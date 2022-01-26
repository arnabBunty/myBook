import React from 'react'
import ImageUpload from './ImageUpload';
import './Posts.css';
import Post from './Post.js';

function Posts({ user }) {
    return (
        <div className="posts">
            <ImageUpload />
            <Post/>
        </div>
    )
}

export default Posts

