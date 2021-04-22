import React, { useState, useEffect } from "react";
import { request } from "graphql-request";
import Grid from "@material-ui/core/Grid";
import HeroImage from "../../../components/HeroImage/HeroImage";
import PostCard from "../../../components/PostCard/PostCard";
import Container from "@material-ui/core/Container";
import blogContentStyles from "../BlogContentStyles";

function HomeContent() {
  //defining classes and theme
  const classes = blogContentStyles();

  //import graphCMS API key from .env
  const GRAPHCMS_KEY = process.env.REACT_APP_GRAPHCMS_KEY;

  //setting state of posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await request(
        GRAPHCMS_KEY,
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

      setPosts(posts);
    };

    fetchPosts();
  }, []);

  console.log(posts)

  return (
    <React.Fragment>
      <Grid>
        <Grid item xs={12}>
          <HeroImage />
        </Grid>
        <Container className={classes.postsContainer}>
          
          <Grid
            container
            align="center"
            spacing={3}
            className={classes.postsGrid}
          >
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <PostCard
                  id={post.id}
                  image={post.image.url}
                  title={post.title}
                  slug={post.slug}
                  createdAt={post.createdAt}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
}

export default HomeContent;
