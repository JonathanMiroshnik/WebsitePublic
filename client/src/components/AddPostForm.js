import React, { useState } from 'react';

import '../App.css';

function AddPostForm({ addPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
            addPost({ title, content });
            setTitle('');
            setContent('');
        } else {
            alert('Both title and content are required!');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: '20px', textAlign: 'center' }}>
            <div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Blog Title"
                    style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
                />
            </div>
            <div>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Blog Content"
                    style={{ marginBottom: '10px', padding: '5px', width: '300px', height: '100px' }}
                />
            </div>
            <button type="submit" style={{ padding: '10px 20px' }}>
                Add Post
            </button>
        </form>
    );
}

export default AddPostForm;
