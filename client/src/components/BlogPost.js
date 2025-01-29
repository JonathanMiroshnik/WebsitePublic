import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./blogData";


import LLMConvo from './LLMConvo';

import '../App.css';
import './ContentContainer/ContentContainer.css';

// function BlogPost({ title, content }) {

//     return (
//         <div style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px', borderRadius: '5px' }}>
//             <h2>{title}</h2>
//             <p>{content}</p>

//             <LLMConvo />
//         </div>
//     );
// }

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  const PostComponent = post.component;

  return (
    <div className="contentContainer">
      <h1>{post.title}</h1>
      <small>{post.date}</small>
      <Suspense fallback={<div>Loading...</div>}>
        <PostComponent />
      </Suspense>
    </div>
  );
};

export default BlogPost;
