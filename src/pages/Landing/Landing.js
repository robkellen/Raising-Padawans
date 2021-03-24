import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { request } from "graphql-request";
import landingStyles from "./LandingStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppNav from "../../components/AppNav/AppNav";
import Header from "../../components/Header/Header";
import BlogNav from "../../components/BlogNav/BlogNav";
import HeroImage from "../../components/HeroImage/HeroImage";

function Landing() {
  //defining classes and theme
  const classes = landingStyles();

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
      console.log(posts);
    };

    fetchPosts();
  }, []);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <AppNav />
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <Container className={classes.mainContainer}>
              {!posts.length ? (
                <h2>Loading Posts...</h2>
              ) : (
                <React.Fragment>
                  <Grid>
                    <Grid item xs={12}>
                      <Header />
                    </Grid>
                    {/* <Grid item xs={12}> */}
                      <BlogNav />
                    {/* </Grid> */}
                    {/* <Grid item xs={12}>
                      <HeroImage />
                    </Grid> */}
                  </Grid>
                  {/* <Container className={classes.postsContainer}>
                    {posts.map(({ title, id, image, content, slug }) => (
                      <article key={id}>
                        <h2>{title}</h2>
                        <img src={image.url} alt="blog post" />
                        <p dangerouslySetInnerHTML={{ __html: content.html }} />
                        <Link to={`/post/${slug}`}>
                          <button className="btn">{title}</button>
                        </Link>
                      </article>
                    ))}
                  </Container> */}
                </React.Fragment>
              )}
            </Container>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Landing;
