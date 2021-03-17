import React from "react";
import Post from "../components/Post/index";

function PostPage() {
  return (
    <div className="container">
      <Post posts={posts} />
    </div>
  );
}
