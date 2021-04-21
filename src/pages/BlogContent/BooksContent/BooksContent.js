import React, { useState, useEffect } from "react";
import { request } from "graphql-request";
import Grid from "@material-ui/core/Grid";
import HeroImage from "../../../components/HeroImage/HeroImage";
import PostCard from "../../../components/PostCard/PostCard";
import Container from "@material-ui/core/Container";
import blogContentStyles from "../BlogContentStyles";

function BooksContent() {
  //defining classes and theme
  const classes = blogContentStyles();

  //setting state of posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await request(
        "https://api-us-west-2.graphcms.com/v2/ckmccrd1544xl01z29ptafga9/master",
        `
      { 
        posts (where: {booksCategory: true}){
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

export default BooksContent;
