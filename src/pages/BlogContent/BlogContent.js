import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory, Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
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
import PostDetail from "../PostDetail/PostDetail";

function BlogContent() {
  //defining classes and theme
  const classes = blogContentStyles();

  //match url to determine which db query to utilize in getUrl()
  let { path, url } = useRouteMatch();
 

  //setting state of posts
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  //set up functionality to change page # in url based on pagination button selected.
  let search = window.location.search;
  let params = new URLSearchParams(search);

  //setting state of pages
  const itemsPerPage = 6;
  const [page, setPage] = useState(parseInt("" + params.get("page=")) || 1);

  //set number of page buttons to show in pagination based on sum of total posts returned by each query
  const [numPages, setNumPages] = useState();

  //match url to update content with corresponding query
  function getUrl() {
    switch (url) {
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
      const { postsConnection } = await getUrl();
      let posts = postsConnection.edges;
      let totalPages = Math.ceil(postsConnection.aggregate.count / itemsPerPage);

      setPosts(posts);
      setNumPages(totalPages);
      setLoading(false);
    };
    fetchPosts();

    //eslint-disable-next-line
  }, [url]);
  console.log(numPages);

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
                <Switch>
                  <Route exact path={path}>
                    {posts
                      // .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                      .map((post) => (
                        <Grid item xs={12} sm={6} md={4} key={post.node.id}>
                          <PostCard
                            id={post.node.id}
                            image={post.node.image.url}
                            title={post.node.title}
                            slug={post.node.slug}
                            createdAt={post.node.createdAt}
                          />
                        </Grid>
                      ))}
                    {/* <Grid item xs={12}>
                    <Box>
                      <Pagination
                        count={numPages}
                        page={page}
                        onChange={changePage}
                      />
                    </Box>
                  </Grid> */}
                  </Route>
                  <Route path={`${path}/:slug`} component={PostDetail} />
                </Switch>
              </>
            )}
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
}

export default BlogContent;
