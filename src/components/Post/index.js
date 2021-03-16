import React from "react";

const Post = (props) => {
  return (
    <div className="container">
      <h1>props.post.title</h1>
      <img src={props.post.image.url} alt="test" />
      <p>{props.post.content}</p>
    </div>
  );
};

export default Post;
