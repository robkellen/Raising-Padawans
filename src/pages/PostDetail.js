import React from "react";
import { useParams } from "react-router-dom";

function PostDetail({ posts }) {
  const { slug } = useParams();

  const post = posts.find((post) => post.slug === slug);
  return (
    <div className="container">
      <h1>{post.title}</h1>
      <img src={post.image.url} alt="test" />
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
