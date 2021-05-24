import React, { useState, useEffect } from "react";
import {
  useRouteMatch,
  useHistory,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CircularProgress from "@material-ui/core/CircularProgress";
import HeroImage from "../../components/HeroImage/HeroImage";
import PostCard from "../../components/PostCard/PostCard";
import blogContentStyles from "./BlogContentStyles";
import {
  ALL_POSTS,
  MOM_LIFE_POSTS,
  ADVENTURES_POSTS,
  BOOKS_POSTS,
  CRAFTS_POSTS,
} from "../../utils/queries/queries";
import PostDetail from "../PostDetail/PostDetail";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { graphcmsKey } from "../../utils/_graphcmsKey";
import { useQuery, gql, ApolloProvider } from "@apollo/client";

function BlogContent() {
  const client = new ApolloClient({
    uri: graphcmsKey,
    cache: new InMemoryCache(),
    // fetch,
  });
  //defining classes and theme
  const classes = blogContentStyles();

  //match url to determine which db query to utilize in getUrl()
  let { path, url } = useRouteMatch();

  //match url to update content with corresponding query
  const getUrl = () => {
    switch (url) {
      case "/blog/mom-life":
        return MOM_LIFE_POSTS;
      case "/blog/adventures":
        return ADVENTURES_POSTS;
      case "/blog/books":
        return BOOKS_POSTS;
      case "/blog/crafts":
        return CRAFTS_POSTS;
      default:
        return ALL_POSTS;
    }
  };

  //set up functionality to change page # in url based on pagination button selected.
  let search = window.location.search;
  let params = new URLSearchParams(search);

  //setting state of pages
  const [currPage, setCurrPage] = useState(
    parseInt("" + params.get("page=")) || 0
  );

  //defining how many posts to show per page
  const itemsPerPage = 6;
  //useQuery hook gets all posts and postsConnection data on page load
  const { loading, error, data, fetchMore } = useQuery(getUrl(), {
    variables: { first: itemsPerPage },
    fetchPolicy: "cache-and-network",
  });

  //update url with page # when changed by pagination buttons
  const history = useHistory();
  const changePage = (value) => {
    setCurrPage(value);
    history.push({
      pathname: `${path}`,
      search: "?page=" + value,
    });
  };

  function getPageQueryVariables() {
    return { first: itemsPerPage, skip: (currPage - 1) * itemsPerPage };
  }

  const getPageRange = (totalCount) => {
    let totalPages = Math.ceil(totalCount / itemsPerPage);
    let range = [];
    let startPage =
      currPage + 4 <= totalPages
        ? Math.max(currPage - 2, 1)
        : Math.max(totalPages - 4, 1);
    for (let i = startPage; i <= Math.min(startPage + 4, totalPages); i++) {
      range.push(i);
    }
    return range;
  };

  function prevPage() {
    setCurrPage(currPage - 1);
    fetchMore({
      variables: getPageQueryVariables(),
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        return fetchMoreResult;
      },
    });
  }

  function nextPage() {
    setCurrPage(currPage + 1);
    fetchMore({
      variables: { first: itemsPerPage, after: data.posts.pageInfo.endCursor },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
  }

  if (error) return `Error! ${error.message}`;

  return (
    <ApolloProvider client={client}>
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
                      {data.posts.edges
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
                      <Grid container justify="center">
                        <Grid item>
                          <Box>
                            {data.posts.pageInfo.hasPreviousPage ? (
                              // <Link to={`${url}?page=${currPage - 1}`}>
                              <IconButton
                                title="Previous Posts"
                                aria-label="previous"
                                onClick={prevPage}
                              >
                                <ChevronLeftIcon />
                              </IconButton>
                            ) : (
                              // </Link>
                              <IconButton aria-label="previous" disabled>
                                <ChevronLeftIcon />
                              </IconButton>
                            )}
                            {/* TODO: Add functionality to page number buttons */}
                            {/* <ButtonGroup aria-label="outlined button group">
                            {getPageRange(data.posts.aggregate.count).map(
                              (pg) => (
                                <Button
                                  key={pg}
                                  onClick={
                                    ((e) => {
                                      e.preventDefault();
                                      changePage();
                                    },
                                    (e) => {
                                      e.preventDefault();
                                      setCurrPage();
                                    },
                                    () => {
                                      fetchMore({
                                        query: getUrl(),
                                        variables: getPageQueryVariables(),
                                        updateQuery: (
                                          prev,
                                          { fetchMoreResult }
                                        ) => {
                                          if (!fetchMoreResult) return prev;
                                          return fetchMoreResult;
                                        },
                                      });
                                    })
                                  }
                                >
                                  {pg}
                                </Button>
                              )
                            )}
                          </ButtonGroup> */}
                            {data.posts.pageInfo.hasNextPage ? (
                              // <Link to={`${url}?page=${currPage + 1}`}>
                              <IconButton
                                title="More Posts"
                                aria-label="more posts"
                                onClick={nextPage}
                              >
                                <ChevronRightIcon />
                              </IconButton>
                            ) : (
                              // </Link>
                              <IconButton aria-label="next" disabled>
                                <ChevronRightIcon />
                              </IconButton>
                            )}
                          </Box>
                        </Grid>
                      </Grid>
                    </Route>
                    <Route path={`${path}/:slug`} component={PostDetail} />
                  </Switch>
                </>
              )}
            </Grid>
          </Container>
        </Grid>
      </React.Fragment>
    </ApolloProvider>
  );
}

export default withRouter(BlogContent);
