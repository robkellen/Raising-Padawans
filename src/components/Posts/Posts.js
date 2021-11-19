import React, { useState, useEffect, useRef } from "react";
import { useRouteMatch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {
  ALL_POSTS,
  MOM_LIFE_POSTS,
  ADVENTURES_POSTS,
  BOOKS_POSTS,
  CRAFTS_POSTS,
} from "../../utils/queries/queries";
import PostCard from "../PostCard/PostCard";
import Loading from "../Loading/Loading";
import PostCounter from "../PostCounter/PostCounter";
import { useQuery } from "@apollo/client";
import usePostsStyles from "./PostsStyles";

const delay = true;

function Posts() {
  //defining styles for Posts component
  const classes = usePostsStyles();
  //match url to determine which db query to utilize in getUrl()
  let { url } = useRouteMatch();

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

  //defining how many posts to show per fetch
  const itemsPerLoad = 6;

  //useQuery hook gets all posts and postsConnection data on page load
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    getUrl(),
    {
      fetchPolicy: "cache-and-network",
      variables: { first: itemsPerLoad },
      notifyOnNetworkStatusChange: true,
    }
  );

  //set reference for button to implement infinite scroll
  const observerRef = useRef(null);
  const [buttonRef, setButtonRef] = useState(null);

  useEffect(() => {
    let componentMounted = true;
    const options = { root: document.querySelector("#posts"), threshold: 0.1 };
    observerRef.current = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && componentMounted) {
        entry.target.click();
      }
    }, options);
    return () => {
      componentMounted = false;
    };
  }, []);

  useEffect(() => {
    let componentMounted = true;
    if (buttonRef && componentMounted) {
      observerRef.current.observe(document.querySelector("#buttonLoadMore"));
    }
    return () => {
      componentMounted = false;
    };
  }, [buttonRef]);

  //if useQuery hook is loading return loading spinner
  // if (loading) return <Loading />;
  if (networkStatus === 1) return <Loading />;
  if (error) return `Error! ${error.message}`;

  const hasNextPage = data.posts.pageInfo.hasNextPage;
  const isRefetching = networkStatus === 3;
  const posts = data.posts.edges;

  return (
    <>
      <div id="posts">
        <Grid container justify="center" spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.node.id}>
              <PostCard
                id={post.node.id}
                image={post.node.image.url}
                title={post.node.title}
                slug={post.node.slug}
                createdAt={post.node.createdAt}
                momLifeCategory={post.node.momLifeCategory}
                adventureCategory={post.node.adventureCategory}
                booksCategory={post.node.booksCategory}
                craftsCategory={post.node.craftsCategory}
              />
            </Grid>
          ))}
          <Grid container justify="center">
            <PostCounter
              numLoaded={posts.length}
              total={data.posts.aggregate.count}
            />
            <Grid item xs={12}>
              <Box classes={{ root: classes.loadMoreButton }}>
                {hasNextPage &&
                  (loading || networkStatus === 1 ? (
                    <Loading />
                  ) : (
                    <Button
                      ref={setButtonRef}
                      id="buttonLoadMore"
                      title="More Posts"
                      aria-label="more posts"
                      disabled={isRefetching}
                      onClick={() =>
                        fetchMore({
                          variables: {
                            first: itemsPerLoad,
                            after: data.posts.pageInfo.endCursor,
                            delay,
                          },
                        })
                      }
                    >
                      Loading...
                    </Button>
                  ))}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Posts;
