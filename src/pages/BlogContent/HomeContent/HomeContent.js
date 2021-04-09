import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { request } from "graphql-request";
import Grid from "@material-ui/core/Grid";
import HeroImage from "../../../components/HeroImage/HeroImage";
import PostCard from "../../../components/PostCard/PostCard";
import Container from "@material-ui/core/Container";
import homeContentStyles from "./HomeContentStyles";

function HomeContent() {
  //defining classes and theme
  const classes = homeContentStyles();

  //setting state of posts
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
            html
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
    };

    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <React.Fragment>
      <Grid>
        <Grid item xs={12}>
          <HeroImage />
        </Grid>

        <Container className={classes.postsContainer}>
          <Grid container align="center" spacing={1} className={classes.postsGrid}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <PostCard
                  id={post.id}
                  image={post.image.url}
                  title={post.title}
                />
                {/* <article key={post.id}>
                  <h2>{post.title}</h2>
                  <img src={post.image.url} alt="blog post" />
                  <p dangerouslySetInnerHTML={{ __html: post.content.html }} />
                  <Link to={`/post/:${post.slug}`}>
                    <button className="btn">{post.title}</button>
                  </Link>
                </article> */}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
}

export default HomeContent;
