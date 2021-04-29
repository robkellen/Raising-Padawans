import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import HeroImage from "../../components/HeroImage/HeroImage";
import PostCard from "../../components/PostCard/PostCard";
import { Pagination } from "@material-ui/lab";
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

  //setting state of posts
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  //setting state of pages
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState();
  console.log(Math.round(posts.length / itemsPerPage));
  console.log(posts);

  //match url to update content with corresponding query
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

  function getNumPages() {
    let pages = Math.round(posts.length / itemsPerPage);
    setNumPages(pages);
  }

  const changePage = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const { posts } = await getUrl();
      setPage(1);
      getNumPages();
      setPosts(posts);
      setLoading(false);
    };

    fetchPosts();
    //eslint-disable-next-line
  }, [url]);

  // console.log(numPages);
  return (
    <React.Fragment>
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
            {loading ? (
              <Grid item className={classes.spinner}>
                <CircularProgress color="secondary" />
              </Grid>
            ) : (
              <>
                {posts
                  .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  .map((post) => (
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
                <Grid container justify="center">
                  <Grid item>
                    <Box>
                      <Pagination
                        count={numPages}
                        page={page}
                        onChange={changePage}
                        defaultPage={1}
                        variant="outlined"
                        size="large"
                        showFirstButton
                        showLastButton
                        className={classes.paginator}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
}

export default HomeContent;
