import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { request } from "graphql-request";

function Landing() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await request(
        "https://api-us-west-2.graphcms.com/v2/ckmccrd1544xl01z29ptafga9/master",
        `
      { 
        posts {
          id
          title
          content {
            text
          }
          createdAt
          image {
            id
            url
          }
          slug
        }
      }
    `
      );

      setPosts(posts);
      console.log(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="wrapper">
      {!posts.length ? (
        <h2>Loading Posts...</h2>
      ) : (
        <div className="container">
          {posts.map(({ title, id, image, content, slug }) => (
            <article className="content" key={id}>
              <h2>{title}</h2>
              {/* <img src={image.url} alt="blog post" /> */}
              <p dangerouslySetInnerHTML={{ __html: content.text }} />
              <Link to={`/post/${slug}`}>
                <button className="btn">Read More</button>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Landing;
