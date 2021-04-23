import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import HeroImage from "../../components/HeroImage/HeroImage";
import PostCard from "../../components/PostCard/PostCard";
import blogContentStyles from "./BlogContentStyles";
import {
  homeQuery,
  momLifeQuery,
  adventuresQuery,
  booksQuery,
  craftsQuery,
} from "../../utils/queries/queries";
import { useRouteMatch } from "react-router";

function HomeContent() {
  //defining classes and theme
  const classes = blogContentStyles();

  let { url } = useRouteMatch();
  console.log(url);

  //setting state of posts
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  function getUrl() {
    switch (url) {
      case "/blog":
        return homeQuery();
      case "/blog/mom-life":
        return momLifeQuery();
      case "/blog/adventures":
        return adventuresQuery();
      case "/blog/books":
        return booksQuery();
      case "/blog/crafts":
        return craftsQuery();
      default:
        return homeQuery();
    }
  }

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const { posts } = await getUrl();
      // const { posts } = await homeQuery();

      setPosts(posts);
      setLoading(false);
    };

    fetchPosts();
  }, [url]);

  console.log(posts);

  return (
    <React.Fragment>
      {loading ? (
        <div>
          <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="secondary" />
          </Backdrop>
        </div>
      ) : (
        <Grid>
          <Grid item xs={12}>
            <HeroImage />
          </Grid>
          <Container className={classes.postsContainer}>
            <Grid
              container
              justify="center"
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
      )}
    </React.Fragment>
  );
}

export default HomeContent;
