import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../components/blogData";

import '../../components/ContentContainer/ContentContainer.css';
import '../../App.css';
import './BlogList.css';

const BlogList = () => {
  return (
    <div className="contentContainer">

      <h1>International Journal of Sensors and Censors</h1>

      <div className="hr-container">
        <hr className="hr-container" />
      </div>

      <br/>
      <br/>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
            <p>{post.description}</p>
            <small>{post.date}</small>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
