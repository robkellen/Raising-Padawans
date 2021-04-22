import React, { useState, useEffect } from "react";
import request from "graphql-request";
import { useParams } from "react-router-dom";

function PostDetail() {
  const [post, setPost] = useState({
    title: "",
    image: [],
    content: "",
  });

  let { slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const { post } = await request(
        "https://api-us-west-2.graphcms.com/v2/ckmccrd1544xl01z29ptafga9/master",
        `
      { 
        post (where: {slug: "${slug}"}) {
          id
          title
          content {
            html
          }
          createdAt
          image {
            url(
              transformation: {
                image: { resize: {height: 240, width: 345, fit: max } }
              }
            )
          }
          slug
        }
      }
    `
      );

      setPost(post);
    };

    fetchPost();
    
  }, [slug]);

  return (
    <div>
      {!post ? (
        "Loading..."
      ) : (
        <React.Fragment>
          <h1>{post.title}</h1>
          <img src={post.image.url} alt="test" />
          <p dangerouslySetInnerHTML={{ __html: post.content.html }} />
        </React.Fragment>
      )}
    </div>
  );
}

export default PostDetail;
